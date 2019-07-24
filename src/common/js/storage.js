export default class Storage {
  constructor (prefix, expire) {
    this.prefix = prefix || '';

    if (expire === -1) {
      this.driver = window.sessionStorage;
    } else {
      this.driver = window.localStorage;
      this.expire = expire || 0;
    }
  }

  _key (key) {
    return this.prefix + key;
  }

  /**
   * 获取所有的本地存储数据对应的 key
   */
  keys () {
    var keys = Object.keys(this.driver);
    if (this.prefix) {
      var index = this.prefix.length;

      return keys.map(function(key) {
        return key.substring(index);
      });
    }
    return keys;
  }

  /**
   * 移除某一项本地存储的数据
   */
  remove (key) {
    this.driver.removeItem(this._key(key));
  }

  /**
   * 清除所有本地存储的数据
   */
  clear () {
    this.driver.clear();
  }

  /**
   * 将数据进行本地存储
   */
  set (key, value, expire) {
    var data = {
      value: value
    };

    if (typeof expire === 'undefined') {
      expire = this.expire;
    }

    if (expire) {
      data.expire = Date.now() + expire * 1000;
    }

    this.driver.setItem(this._key(key), JSON.stringify(data));
  }

  /**
   * 提取本地存储的数据
   */
  get (key) {
    var data = this.driver.getItem(this._key(key));

    if (data) {
      data = JSON.parse(data);

      if (data.expire) {
        if (data.expire < Date.now()) {
          this.remove(key);
          data = null;
        }
      }
    }

    return data && data.value;
  }
}

export const localStg = new Storage('VE_')
