#!/usr/bin/env bash
run_upload2() {
if [[ -z "${TOK}" ]]; then
  if [ -s ./cc.log ]; then
    new_argo_domain=$(cat ./cc.log | grep -o "info.*https://.*trycloudflare.com" | sed "s@.*https://@@g" | tail -n 1)
    if [ "${ARGO_DOMAIN}" != "${new_argo_domain}" ]; then
      export ARGO_DOMAIN="${new_argo_domain}"
      echo "ARGO_DOMAIN has changed. Updated to: ${ARGO_DOMAIN}"

      ./upload.sh
    fi
  fi
fi

}

run_upload2
