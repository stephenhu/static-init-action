// static init action

const core    = require("@actions/core");
const github  = require("@actions/github");

const TEMPLATE      = "template";
const STAGING       = "staging";
const PRODUCTION    = "production";

const ERR_INVALID_REPO_NAME =
  "Error: invalid repository name, must consist of alphanumerics, hyphen, underscore, or period only";
const ERR_EMPTY_REPO_NAME =
  "Error: empty repository name";
const ERR_SPACE_REPO_NAME =
  "Error: space in repository name";


function checkParams(pa) {

  let re = new RegExp("[A-Za-z0-9-_.]+$");

  for(var i = 0; i < pa.length; i++) {

    console.log(pa[i]);
    var n = process.env[pa[i].toUpperCase()];
    console.log(n);

    console.log(re.test(n));

    if(n === null || n === "" || n == undefined) {
      console.log(`${ERR_EMPTY_REPO_NAME} ${pa[i]}`);
      return false;
    } else {
  
      if(!re.test(n)) {
        console.log(`${ERR_INVALID_REPO_NAME} ${pa[i]}`);
        return false;
      }
  
    }
  
  }

  return true;

} // checkParams


if(checkParams([TEMPLATE, STAGING, PRODUCTION])) {
  
}
