import json,re,unicodedata,difflib,urllib.parse,collections,pathlib
D=pathlib.Path('tmp/paprika-sync-2026-10-05')
p=json.loads((D/'paprika.json').read_text());m=json.loads((D/'mise.json').read_text());aliases=json.loads(pathlib.Path('src/data/recipe-aliases.json').read_text())
def norm(x):
 x=x.replace('&',' and ').replace('’',"'").replace("'",'').replace('–','-').replace('—','-');x=unicodedata.normalize('NFKD',x).encode('ascii','ignore').decode().lower(); x=re.sub(r'\(the .*?standard\)','',x);return re.sub(r'[^a-z0-9]+',' ',x).strip()
def url(x):
 x=urllib.parse.urlparse(x or '');return (x.netloc.lower().removeprefix('www.')+x.path.rstrip('/')).lower()
matched=[];unmatched=[]
for r in p:
 n=norm(r['name']);u=url(r.get('source_url'))
 byname=[s for s in m if n in (norm(s['data']['title']),norm(s['slug']))]
 byurl=[s for s in m if u and u==url(s['data'].get('sourceUrl'))]
 slug=n.replace(' ','-');byalias=[s for s in m if aliases.get(slug)==s['slug']]
 candidates=byname or byurl or byalias
 if len(candidates)==1:matched.append({'uid':r['uid'],'name':r['name'],'slug':candidates[0]['slug'],'match':'name' if byname else 'url' if byurl else 'alias'})
 else:
  scores=sorted([(max(difflib.SequenceMatcher(None,n,norm(s['slug'])).ratio(),difflib.SequenceMatcher(None,n,norm(s['data']['title'])).ratio()),s['slug']) for s in m],reverse=True)
  unmatched.append({'uid':r['uid'],'name':r['name'],'candidates':[s['slug'] for s in candidates],'suggestions':scores[:3]})
(D/'matches.json').write_text(json.dumps(matched,indent=2));(D/'unmatched.json').write_text(json.dumps(unmatched,indent=2))
print('Matched',len(matched),'unmatched',len(unmatched),'unique targets',len(set(x['slug'] for x in matched)))
for x in unmatched: print(x['name'],'=>',x['candidates'] or x['suggestions'])
print('Duplicate targets',[(k,v) for k,v in collections.Counter(x['slug'] for x in matched).items() if v>1])
