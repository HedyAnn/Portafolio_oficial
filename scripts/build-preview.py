# Copia dist/ a una carpeta de vista previa con rutas relativas, para publicarla como artifact en el chat.
# Uso: npm run build && python scripts/build-preview.py dist <carpeta-salida>
# El servicio de artifacts reserva los nombres que empiezan con "_", por eso _astro/ pasa a assets/.
import os, re, shutil, sys, json
src, out = sys.argv[1], sys.argv[2]
if os.path.exists(out): shutil.rmtree(out)
shutil.copytree(src, out)
os.rename(os.path.join(out, '_astro'), os.path.join(out, 'assets'))

def rel_prefix(path):
    depth = os.path.relpath(path, out).replace('\\', '/').count('/')
    return './' if depth == 0 else '../' * depth

def fix_url(u, pre):
    if not u.startswith('/') or u.startswith('//'):
        return u
    path, sep, frag = u.partition('#')
    path, qsep, query = path.partition('?')
    p = path.lstrip('/')
    if p.startswith('_astro/'): p = 'assets/' + p[len('_astro/'):]
    if p == '' or p.endswith('/'):
        p = p + 'index.html'
    return pre + p + (qsep + query if qsep else '') + (sep + frag if sep else '')

attr = re.compile(r'(\s(?:href|src|action|poster|data-src|data-zoom)=")([^"]*)(")')
srcset = re.compile(r'(\ssrcset=")([^"]*)(")')
cssurl = re.compile(r'url\((["\']?)(/[^)"\']+)\1\)')

for root, _, files in os.walk(out):
    for f in files:
        p = os.path.join(root, f)
        if f.endswith('.html'):
            pre = rel_prefix(p)
            s = open(p, encoding='utf-8').read()
            s = attr.sub(lambda m: m.group(1) + fix_url(m.group(2), pre) + m.group(3), s)
            s = srcset.sub(lambda m: m.group(1) + ', '.join(
                (lambda parts: ' '.join([fix_url(parts[0], pre)] + parts[1:]))(c.strip().split(' '))
                for c in m.group(2).split(',')) + m.group(3), s)
            s = cssurl.sub(lambda m: 'url(' + m.group(1) + fix_url(m.group(2), pre) + m.group(1) + ')', s)
            open(p, 'w', encoding='utf-8', newline='').write(s)
        elif f.endswith('.css'):
            pre = rel_prefix(p)
            s = open(p, encoding='utf-8').read()
            s = cssurl.sub(lambda m: 'url(' + m.group(1) + fix_url(m.group(2), pre) + m.group(1) + ')', s)
            open(p, 'w', encoding='utf-8', newline='').write(s)

skip = {'_headers', '_redirects', 'robots.txt'}
files = {}
for root, _, fs in os.walk(out):
    for f in fs:
        rel = os.path.relpath(os.path.join(root, f), out).replace('\\', '/')
        if rel == 'index.html' or f in skip: continue
        files[rel] = os.path.join(root, f).replace('\\', '/')
json.dump(sorted(files), open(os.path.join(os.path.dirname(os.path.abspath(out)), 'preview_files.json'), 'w'), indent=0)
print(len(files), 'files')
