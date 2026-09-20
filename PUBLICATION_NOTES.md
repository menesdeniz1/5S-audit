# Maintenance — 21 September 2026

Historical UI prototype, NOT a deployable audit system. The old plaintext-login/database implementation was removed from reachable history. All backend requests now return HTTP 410 and no data is read or written. The stub listens only on localhost. Frontend forms are historical UI only and no longer save data.

Old external clones, GitHub cached commits and provider sessions are not erased by rewriting this repository.
