import { VERSION } from "./version";

/**
 * Generate help page
 * @param {string} url
 * @returns {string}
 */
// tslint:disable-next-line:no-shadowed-variable
export function generateHelpPage(url: string): string {
  return `Help for Piping Server ${VERSION}
(Repository: https://github.com/nwtgck/piping-server)

======= Get  =======
curl ${url}/mypath

======= Send =======
# Send a file
curl -T myfile ${url}/mypath

# Send a text
echo 'hello!' | curl -T - ${url}/mypath

# Send a directory (zip)
zip -q -r - ./mydir | curl -T - ${url}/mypath

# Send a directory (tar.gz)
tar zfcp - ./mydir | curl -T - ${url}/mypath

# Encryption
## Send
cat myfile | openssl aes-256-cbc | curl -T - ${url}/mypath
## Get
curl ${url}/mypath | openssl aes-256-cbc -d
`;
}
