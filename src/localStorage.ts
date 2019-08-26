// When shape of existing items in localstorage change, increase the version
export const LOCAL_STORAGE_VERSION = "1";
export const LOCAL_STORAGE_VERSION_KEY = "LOCAL_STORAGE_VERSION";

export const isLocalStorageSupported =
  typeof window["localStorage"] != "undefined" &&
  window["localStorage"] != null;

export const addToLocalStorage = (key: string, item: any): void => {
  if (isLocalStorageSupported) {
    handleLocalStorageVersioning();

    localStorage.setItem(key, JSON.stringify(item));
  }
};

export const getFromLocalStorage = (key: string, fallback?: any): any => {
  if (isLocalStorageSupported) {
    handleLocalStorageVersioning();

    const item = localStorage.getItem(key);

    if (typeof item === "string" && item.length > 0) {
      return JSON.parse(item);
    }
  }

  if (fallback) {
    return fallback;
  }
};

export const getLocalStorageVersion = (): string | undefined => {
  if (isLocalStorageSupported) {
    const version = localStorage.getItem(LOCAL_STORAGE_VERSION_KEY);

    if (typeof version === "string" && version.length > 0) {
      return version;
    }
  }
};

export const handleLocalStorageVersioning = (): void => {
  const version = getLocalStorageVersion();

  if (version !== LOCAL_STORAGE_VERSION) {
    clearLocalStorage();
    localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, LOCAL_STORAGE_VERSION);
  }
};

export const removeFromLocalStorage = (key: string): void => {
  if (isLocalStorageSupported) {
    localStorage.removeItem(key);
  }
};

export const clearLocalStorage = (): void => {
  if (isLocalStorageSupported) {
    localStorage.clear();
  }
};
