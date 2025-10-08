# Projeto app-ListaProdutos da disciplina Programacao Web 👋

<h2>Esse projeto foi publicado online no link: ✔ Created @coimbradouglas/app-ListaProdutos: https://expo.dev/accounts/coimbradouglas/projects/app-ListaProdutos on EAS</h2>

Disciplina: Programação WEB
Professor: Leonardo Vieira

🧩 Parte 1 – Criar e publicar app com Expo
📱 Expo transforma seu projeto em um app para Android/iOS ou web

🔧 1. Instale o Expo CLI (caso ainda não tenha)
```bash
Copiar
Editar
npm install -g expo-cli
```

🚀 2. Crie um projeto React Native com Expo
```bash
Copiar
Editar
npx create-expo-app nome-do-app
cd nome-do-app
```

📦 3. Instale o Axios para comunicação com API
```bash
Copiar
Editar
npm install axios
```

🔌 4. Teste localmente
```bash
Copiar
Editar
npx expo start
```
Vai abrir o navegador com um QR Code.
Você pode escanear com o app Expo Go no celular para testar.


📱Exportar o projeto para o app acessível online

✅ ETAPA 1: Testar localmente
No terminal, rode:

```bash
Copiar
Editar
npx expo start
```

Teste no celular com o app Expo Go

Verifique se os dados da API (https://apipw.leoproti.com.br/produtos) aparecem corretamente

✅ ETAPA 2: Compilar e publicar com Expo
🚀 1. Faça login no Expo (se ainda não fez)
```bash
Copiar
Editar
npx expo login
```

🆙 2. Publique a versão atualizada online (versão web + mobile Expo Go)
```bash
Copiar
Editar
npx expo publish
```

Isso vai gerar uma URL como:

perl
Copiar
Editar
https://expo.dev/@seu-usuario/nome-do-app
Essa versão pode ser acessada pelo celular via Expo Go ou pelo navegador!

✅ ETAPA 3 (opcional): Compilar para app nativo (APK ou AAB)
📦 Para Android APK:
```bash
Copiar
Editar
npx expo build:android
Esse comando está disponível em projetos com Expo SDK ≤ 48. Se você usa SDK 49 ou superior, use o novo sistema:
```

```bash
Copiar
Editar
npx expo export --platform android
npx eas build --platform android
Você será guiado para configurar o EAS Build e criar o APK (Android) ou AAB (para Play Store).
```

✅ ETAPA 4: Verificar a conexão com a API
No app publicado:

Certifique-se de que a URL da API usada no código está acessível publicamente:
```bash
ts
Copiar
Editar
const API_URL = "https://apipw.leoproti.com.br/produtos";
Abra o app publicado e veja se os produtos são listados normalmente.
```

✅ Resumo final
Ação	Comando
Testar local	npx expo start
Publicar na nuvem (Expo)	npx expo publish
Compilar APK (manual)	npx eas build --platform android
Ver app publicado	https://expo.dev/@seu-usuario/nome-do-app
