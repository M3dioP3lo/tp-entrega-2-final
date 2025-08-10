# 🛍️ Proyecto Ecommerce - Entrega 4

Aplicación web de catálogo y carrito de compras desarrollada con React + TypeScript + Vite. Permite visualizar productos, filtrarlos por categoría, ver detalles individuales, agregar al carrito y simular el proceso de compra.
Refactorización visual del carrito de compras y pantalla de checkout.
Mejora en la presentación del producto individual: jerarquía visual, separación de imagen y descripción.
Implementación de la ruta /crear-producto con formulario funcional usando useMutation.
Integración de botón en el navbar para acceder a la creación de productos.
## 🚀 Tecnologías utilizadas

- React + TypeScript
- Vite
- React Router
- CSS Modules
- Custom Hooks
- Mock de servicios (`productService`)
- 
Se adjunta video con los cambios en los estilos solicitados.

https://github.com/user-attachments/assets/ae3d05c1-fc32-4d10-bbe1-e43a67d13ad1

Se agregan capturas del funcionamiento según consignas sobre el último trabajo. TP4

![04 Entrega-4](https://github.com/user-attachments/assets/ae5139dd-ee42-45fe-9420-4d882f2fde8d)
![03 Entrega-4](https://github.com/user-attachments/assets/9cd3117e-81e4-4f4b-b787-b567f54c77b3)
![02 Entrega-4](https://github.com/user-attachments/assets/b44eb3ac-a1ce-44c4-88fe-ec0fb7b01cc4)
![01 Entrega-4](https://github.com/user-attachments/assets/f1327f49-d22a-4665-b51b-2ba48f4ad91f)
![05 Entrega-4](https://github.com/user-attachments/assets/d8a05ce5-4677-4436-b0ad-ee98024e7e3e)
![06 Entrega-4](https://github.com/user-attachments/assets/81e8a362-5118-4ed0-8133-13c0bc459bda)
![07 Entrega-4](https://github.com/user-attachments/assets/f4cc1d24-4e46-49d9-b0b1-352f7c9560b8)
![08 Entrega-4](https://github.com/user-attachments/assets/5d7f19c4-7f77-488f-b3b1-7872aa791464)






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  extends: [
    // other configs...
    // Enable lint rules for React
    reactX.configs['recommended-typescript'],
    // Enable lint rules for React DOM
    reactDom.configs.recommended,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```
