import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'atode yomu client',
    version: '0.0.2',
    description: 'Easily add to atode yomu',
    permissions: ['storage', 'activeTab'],
    action: {
      default_popup: 'popup.html',
      default_icon: {
        16: 'icon/16.png',
        48: 'icon/48.png',
        128: 'icon/128.png',
      },
    },
  },
});
