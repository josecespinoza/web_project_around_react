class Api {
  #address;
  #groupId;
  #token;
  #headers;
  #resource;
  #body;
  #requestOptions;
  #method;

  constructor({ address, groupId, token }) {
    this.#address = address;
    this.#groupId = groupId;
    this.#token = token;
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.patch = this.patch.bind(this);
    this.delete = this.delete.bind(this);
    this.#requestOptions = {};
  }

  #setMethod(method) {
    this.#method = method;
  }

  configRequest(resource, body = null) {
    this.#resource = resource;
    body && (this.#body = body);
  }

  #setHeaders(headers) {
    this.#headers = headers;
  }

  #buildRequestOptions() {
    this.#setHeaders({
      authorization: `${this.#token}`,
      "Content-Type": "application/json",
    });

    this.#requestOptions.headers = this.#headers;

    this.#body && (this.#requestOptions.body = JSON.stringify(this.#body));

    this.#method && (this.#requestOptions.method = this.#method);

    return JSON.parse(JSON.stringify(this.#requestOptions));
  }

  _updateOptions({ address, groupId, token }) {
    this.#address = address;
    this.#groupId = groupId;
    this.#setHeaders({
      authorization: `${this.#token}`,
      "Content-Type": "application/json",
    });
    this.#buildRequestOptions();
  }

  #doRequest() {
    const requestOptions = this.#buildRequestOptions();
    console.log(requestOptions);
    return fetch(
      `${this.#address}/${this.#groupId}/${this.#resource}`,
      requestOptions
    ).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );
  }

  get() {
    this.#setMethod("GET");
    return this.#doRequest();
  }

  post() {
    this.#setMethod("POST");
    return this.#doRequest();
  }

  put() {
    this.#setMethod("PUT");
    return this.#doRequest();
  }

  patch() {
    this.#setMethod("PATCH");
    return this.#doRequest();
  }

  delete() {
    this.#setMethod("DELETE");
    return this.#doRequest();
  }
}

let instance;

const getInstance = ({ address, groupId, token }) => {
  if (!instance) {
    instance = new Api({ address, groupId, token });
  }
  instance._updateOptions({ address, groupId, token });
  return instance;
};

export { getInstance };
