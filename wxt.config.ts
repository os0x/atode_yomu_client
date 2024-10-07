import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'atode yomu',
    version: '0.0.1',
    description: 'atode yomu',
    permissions: ['storage', 'activeTab'],
    host_permissions: ['https://atodeyomu.morishin.me/'],
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
