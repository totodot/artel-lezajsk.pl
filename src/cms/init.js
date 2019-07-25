import CMS from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';
import { project } from '../../siteConfig';

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
CMS.init({
  config: {
    ...config,
    load_config_file: false,
    media_folder: `static/assets/${project}`,
    public_folder: `/assets/${project}`,
    slug: {
      encoding: 'ascii',
      clean_accents: true,
      sanitize_replacement: '_',
    },
    collections: [
      {
        name: 'news',
        label: 'News',
        folder: `content/${project}/news`,
        create: true,
        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
        fields: [
          {
            name: 'published',
            label: 'Published',
            widget: 'boolean',
            default: true,
          },
          {
            name: 'date',
            label: 'Date',
            widget: 'date',
          },
          {
            name: 'title',
            label: 'Title',
          },
          {
            label: 'image',
            name: 'image',
            widget: 'image',
          },
          {
            name: 'body',
            label: 'Body',
            widget: 'markdown',
          },
        ],
      },
      {
        name: 'offer',
        label: 'Offer',
        folder: `content/${project}/offer`,
        create: true,
        slug: '{{slug}}',
        fields: [
          {
            name: 'title',
            label: 'Title',
          },
          {
            label: 'image',
            name: 'image',
            widget: 'image',
          },
          {
            name: 'categories',
            label: 'Categories',
            widget: 'list',
            field: {
              label: 'Category',
              name: 'category',
              widget: 'string',
            },
          },
          {
            name: 'body',
            label: 'Body',
            widget: 'markdown',
          },
        ],
      },
      {
        name: 'promotions',
        label: 'Promotions',
        folder: `content/${project}/promotions`,
        create: true,
        slug: '{{slug}}',
        fields: [
          {
            name: 'title',
            label: 'Title',
          },
          {
            name: 'active',
            label: 'Active',
            widget: 'boolean',
            default: true,
          },
          {
            label: 'image',
            name: 'image',
            widget: 'image',
          },
          {
            name: 'type',
            label: 'Type',
            widget: 'select',
            options: ['newPrice', 'percentage'],
            default: 'newPrice',
          },
          {
            name: 'oldPrice',
            label: 'Old Price',
            widget: 'number',
            valueType: 'float',
          },
          {
            name: 'newPrice',
            label: 'New Price',
            widget: 'number',
            valueType: 'float',
          },
          {
            name: 'percentage',
            label: 'Percentage',
            widget: 'number',
            valueType: 'int',
          },
          {
            name: 'body',
            label: 'Body',
            widget: 'markdown',
          },
        ],
      },
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            file: `content/${project}/about/index.md`,
            label: 'About',
            name: 'about',
            fields: [
              {
                label: 'Title',
                name: 'title',
                widget: 'string',
              },
              {
                label: 'Body',
                name: 'body',
                widget: 'markdown',
              },
            ],
          },
          {
            file: `content/${project}/home/index.md`,
            label: 'Home',
            name: 'home',
            fields: [
              {
                label: 'Title',
                name: 'title',
                widget: 'string',
              },
              {
                label: 'image',
                name: 'image',
                widget: 'image',
              },
              {
                label: 'Body',
                name: 'body',
                widget: 'markdown',
              },
            ],
          },
          {
            file: `content/${project}/producers/index.json`,
            label: 'Producers',
            name: 'producers',
            extension: 'json',
            fields: [
              {
                label: 'Producers',
                name: 'producers',
                widget: 'list',
                fields: [
                  {
                    label: 'Name',
                    name: 'name',
                    widget: 'string',
                  },
                  {
                    label: 'Image',
                    name: 'image',
                    widget: 'image',
                  },
                  {
                    label: 'Link',
                    name: 'link',
                    widget: 'string',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
