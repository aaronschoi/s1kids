const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

const fetchJson = async (url, options, onCancel) => {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

const list = async (param, signal) => {
  const url = `${API_BASE_URL}/${param}`;
  return await fetchJson(url, { headers, signal }, []);
};

const read = async (id, param, signal) => {
  const url = `${API_BASE_URL}/${param}/${id}`;
  return await fetchJson(url, { headers, signal }, []);
}

const putOrPost = async (id, param, data, method, signal) => {
  const url = `${API_BASE_URL}/${param}/${id}`;
  return await fetchJson(
    url,
    {
      body: JSON.stringify({ data }),
      headers,
      method: `${method}`,
      signal,
    },
    []
  );
}

const generalAPIcall = async (param, data, method, signal) => {
  const url = `${API_BASE_URL}/${param}`;
  return await fetchJson(
    url,
    {
      body: JSON.stringify({ data }),
      headers,
      method: `${method}`,
      signal,
    },
    []
  );
}

const destroy = async (id, param, signal) => {
  const url = `${API_BASE_URL}/${param}/${id}`;
  const options = { method: "DELETE", signal };
  return await fetchJson(url, options);
}

module.exports = {
  list,
  read,
  generalAPIcall,
  putOrPost,
  destroy
};
