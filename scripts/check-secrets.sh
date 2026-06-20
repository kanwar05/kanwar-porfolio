#!/usr/bin/env bash
set -euo pipefail

forbidden_files="$(git ls-files | grep -Ei '(^|/)(\.env($|\.)|.*recovery[-_]?codes?.*|.*\.(pem|p12|pfx|key)$)' | grep -Ev '\.env\.example$' || true)"
if [[ -n "$forbidden_files" ]]; then
  echo "Potential secret-bearing files are tracked:"
  echo "$forbidden_files"
  exit 1
fi

if git grep -nEI '(github_pat_[A-Za-z0-9_]{20,}|ghp_[A-Za-z0-9]{20,}|-----BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY-----|mongodb(\+srv)?://[^[:space:]]+:[^[:space:]@]+@)' -- ':!package-lock.json'; then
  echo "Potential credential material detected."
  exit 1
fi

echo "Tracked-file secret scan passed."
