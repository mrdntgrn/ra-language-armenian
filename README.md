# Armenian Messages for React-Admin

Armenian messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-armenian
```

## Usage

```js
import armenianMessages from 'ra-language-armenian';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'am': armenianMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

<Admin locale="am" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.
