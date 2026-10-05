# Private native evidence preservation — October 5, 2026

The existing private identity policy is now enforced across public review/sync evidence and tracked exports as well as built website assets. No recipe identities were replaced and no native-app import was performed. Existing authored recipe/draft miseId fields are preserved.

Thirty-five older review records contained native identity values. Their cooking text and provenance are retained while those values are replaced by a private-binding reference. The two public 450-record sync files and fresh-export evidence now use SHA-256 native references; all decisions, destinations and source-content digests remain unchanged. Binding requires the actual native export identity and rejects duplicate, missing, extra or conflicting references. No title guessing is used. The three exact draft bindings remain recoverable.

All five formerly tracked native archives have byte-identical backups in ignored private storage, with private checksums. They are removed from the current public Git tree and ignored in their old export locations. Local originals remain present. The exact Coq au Vin native HTML is retained privately; the public review copy preserves its cooking text and omits the native photo reference. Existing Git history is retained.

Independent review compared the 450 decisions, exact three draft references and all 653 verified native identities against retained original evidence. Read-only recovery inspection had no unmapped recipes or changed bindings. Full tests, existing merge/source-drift tests, identity checks, export parity and privacy checks pass. Public evidence detection also rejects long legacy native IDs when the private registry is absent.

A clean clone can build the site. Paprika export/recovery requires a privately backed-up verified native export or registry; missing private evidence is a real blocker. README describes the verified recovery procedure. Website releases do not import native archives into Paprika.
