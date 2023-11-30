#!/usr/bin/env bash
# =============设置参数=========
export UUID=${UUID:-'fd80f56e-93f3-4c85-b2a8-c77216c509a7'}
export VPATH=${VPATH:-'vls'} 
export CF_IP=${CF_IP:-'ip.sb'}
export SUB_NAME=${SUB_NAME:-'vps'}
export SUB_URL=${SUB_URL:-'https://xxxx'}


#固定通道填写:
#export ARGO_DOMAIN=${ARGO_DOMAIN:-'xxxx'} 

# ===============分割线===============

upload_url_data() {
    if [ $# -lt 3 ]; then
        return 1
    fi

    UPLOAD_URL="$1"
    URL_NAME="$2"
    URL_TO_UPLOAD="$3"

    # 检查curl命令是否存在
    if command -v curl &> /dev/null; then

       curl -s -o /dev/null -X POST -H "Content-Type: application/json" -d "{\"URL_NAME\": \"$URL_NAME\", \"URL\": \"$URL_TO_UPLOAD\"}" "$UPLOAD_URL"

    # 检查wget命令是否存在
    elif command -v wget &> /dev/null; then

        echo "{\"URL_NAME\": \"$URL_NAME\", \"URL\": \"$URL_TO_UPLOAD\"}" | wget --quiet --post-data=- --header="Content-Type: application/json" "$UPLOAD_URL" -O -

    else
        echo "Both curl and wget are not installed. Please install one of them to upload data."
    fi
}

run_getc() {

export server_ip=$(curl -s https://ipinfo.io/ip)
export ACCESS_TOKEN=${ACCESS_TOKEN:-'08dd8ccc089e20;47292b48b784cb'}  # 到ipinfo.io注册,多个token用;隔开

IFS=';' read -ra tokens <<< "$ACCESS_TOKEN"

export country_abbreviation=""

# Try free API without access token
country_abbreviation=$(curl -s "https://ipinfo.io/${server_ip}/country")

# If the free API doesn't provide a result, try with access tokens
if [[ -z "$country_abbreviation" || ! "$country_abbreviation" =~ ^[A-Z]{2}$ ]]; then
  for token in "${tokens[@]}"; do
    country_abbreviation=$(curl -s "https://ipinfo.io/${server_ip}/country?token=${token}")

    # Check if the obtained abbreviation is valid (two uppercase letters)
    if [[ -n "$country_abbreviation" && "$country_abbreviation" =~ ^[A-Z]{2}$ ]]; then
      echo "Successfully obtained valid country abbreviation using token: $country_abbreviation"
      break  # Exit the loop if a valid abbreviation is obtained
    else
      echo "Token $token did not provide a valid country abbreviation."
    fi
  done
fi

# If still not valid or doesn't exist, default to "UN"
if [ -z "$country_abbreviation" ] || [[ ! "$country_abbreviation" =~ ^[A-Z]{2}$ ]]; then
  country_abbreviation="UN"
fi
echo "country_abbreviation: $country_abbreviation" > ./guojia.yaml
}

run_upload() {
if [[ -z "${TOK}" ]]; then
  [ -s ./cc.log ] && export ARGO_DOMAIN=$(cat ./cc.log | grep -o "info.*https://.*trycloudflare.com" | sed "s@.*https://@@g" | tail -n 1)
  [ ! -s ./cc.log ] && export ARGO_DOMAIN="未获取到隧道域名"
fi
if [ -s "./guojia.yaml" ]; then
   country_abbreviation=$(cat "./guojia.yaml" | grep "country_abbreviation" | cut -d ' ' -f2)

  if [[ -n "$country_abbreviation" && "$country_abbreviation" =~ ^[A-Z]{2}$ ]]; then
    echo "Successfully obtained valid country abbreviation from file: $country_abbreviation"
  else
    country_abbreviation="UN"
  fi
else
    run_getc
fi

export V_URL="{PASS}://${UUID}@${CF_IP}:443?host=${ARGO_DOMAIN}&path=%2F${VPATH}%3Fed%3D2048&type=ws&encryption=none&security=tls&sni=${ARGO_DOMAIN}#{PASS}-${country_abbreviation}-${SUB_NAME}"
echo "${V_URL}" > ./list.log
if [[ -n "${SUB_URL}" ]]; then
  upload_url_data "${SUB_URL}" "${SUB_NAME}" "${V_URL}"
fi

}
run_upload
