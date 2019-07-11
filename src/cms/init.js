import CMS from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';
import ObjectFields from './ObjectFields';

CMS.registerWidget('objectFields', ObjectFields, null);
const config = {};
if (process.env.NODE_ENV === 'development') {
  config.backend = {
    name: 'file-system',
    api_root: '/api',
  };
  config.display_url = 'http://localhost:8000';
  CMS.registerBackend('file-system', FileSystemBackend);
} else {
  config.backend = {
    name: 'git-gateway',
    branch: 'master',
  };
}
CMS.init({ config });
