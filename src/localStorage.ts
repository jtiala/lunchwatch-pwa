export interface LocalStorageItem {
  key: string;
  value: any;
}

export const isLocalStorageSupported =
  typeof window["localStorage"] != "undefined" &&
  window["localStorage"] != null;

export const addToLocalStorage = (key: string, item: any): void => {
  if (isLocalStorageSupported) {
    localStorage.setItem(key, item);
  }
};

export const getFromLocalStorage = (key: string, fallback?: any): any => {
  if (isLocalStorageSupported) {
    const item = localStorage.getItem(key);

    if (item) {
      return item;
    }
  }

  if (fallback) {
    return fallback;
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
