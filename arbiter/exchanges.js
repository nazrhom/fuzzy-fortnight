import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

class Exchange {
  constructor(credentials) {}
  get_hmac(message, nonce, path, key) {
    const hash_digest = sha256(nonce + message);
    const hmac_digest = Base64.stringify(hmacSHA512(path + hash_digest, key));
    return hmacDigest;
  }
}
class Kraken extends Exchange {
  constructor(credentials) {
    super(credentials);
  }
  create_invoice() {}
  get_rate() {}
  auth() {}
}
class Binance extends Exchange {
  constructor(credentials) {
    super(credentials);
  }
  create_invoice() {}
  get_rate() {}
  auth() {}
}
