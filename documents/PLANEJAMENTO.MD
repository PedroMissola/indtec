<div align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Shadcn%2FUI-000000?style=for-the-badge&logo=shadcnui&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Compiler-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <br><br>
  <h1>Documentação Oficial: IND TEC</h1>
  <p>Planejamento Estrutural, Conteúdo e Integrações da Landing Page</p>
</div>

<hr>

<h2><img src="https://img.shields.io/badge/01-Estrutura_do_Projeto-black?style=flat-square&color=000000" /> Árvore de Arquivos (File Tree)</h2>
<p>Arquitetura otimizada para o <b>Next.js</b> (JavaScript), com pastas para componentes do <b>Shadcn UI</b> e divisões semânticas por seções da página.</p>

<div style="background-color: #1a1a1a; color: #b7df20; padding: 15px; border-radius: 8px; font-family: monospace; line-height: 1.5;">
📦 ind-tec-landing-page<br>
 ┣ 📂 .next<br>
 ┣ 📂 app<br>
 ┃ ┣ 📂 components<br>
 ┃ ┃ ┣ 📂 sections<br>
 ┃ ┃ ┃ ┣ 📜 Hero.jsx <i><span style="color:#888;">(Início e CTA)</span></i><br>
 ┃ ┃ ┃ ┣ 📜 Servicos.jsx <i><span style="color:#888;">(Lista de equipamentos)</span></i><br>
 ┃ ┃ ┃ ┣ 📜 ComoFunciona.jsx <i><span style="color:#888;">(Passo a passo)</span></i><br>
 ┃ ┃ ┃ ┣ 📜 Confianca.jsx <i><span style="color:#888;">(Galeria e Vídeo YouTube)</span></i><br>
 ┃ ┃ ┃ ┣ 📜 Avaliacoes.jsx <i><span style="color:#888;">(Depoimentos Google)</span></i><br>
 ┃ ┃ ┃ ┣ 📜 Faq.jsx <i><span style="color:#888;">(Dúvidas frequentes)</span></i><br>
 ┃ ┃ ┃ ┗ 📜 Contato.jsx <i><span style="color:#888;">(Endereço e Maps)</span></i><br>
 ┃ ┃ ┣ 📂 ui <i><span style="color:#888;">(Componentes Shadcn)</span></i><br>
 ┃ ┃ ┃ ┣ 📜 button.jsx<br>
 ┃ ┃ ┃ ┣ 📜 card.jsx<br>
 ┃ ┃ ┃ ┗ 📜 accordion.jsx<br>
 ┃ ┃ ┗ 📜 WhatsAppButton.jsx <i><span style="color:#888;">(Botão flutuante)</span></i><br>
 ┃ ┣ 📂 lib<br>
 ┃ ┃ ┗ 📜 utils.js <i><span style="color:#888;">(Tailwind merge)</span></i><br>
 ┃ ┣ 📜 favicon.ico<br>
 ┃ ┣ 📜 globals.css <i><span style="color:#888;">(Variáveis Verde Limão e Preto)</span></i><br>
 ┃ ┣ 📜 layout.js <i><span style="color:#888;">(Tags SEO, Google Analytics, Pixel)</span></i><br>
 ┃ ┗ 📜 page.js <i><span style="color:#888;">(Página principal agregadora)</span></i><br>
 ┣ 📂 public<br>
 ┃ ┣ 📜 logo-ind-tec.png<br>
 ┃ ┣ 📜 foto-equipe.jpg<br>
 ┃ ┗ 📜 foto-loja.jpg<br>
 ┣ 📜 components.json <i><span style="color:#888;">(Configuração Shadcn)</span></i><br>
 ┣ 📜 next.config.mjs <i><span style="color:#888;">(React Compiler config)</span></i><br>
 ┗ 📜 package.json<br>
</div>

<br>

<h2><img src="https://img.shields.io/badge/02-Mapa_do_Site-black?style=flat-square&color=000000" /> Mapa do Site e Fluxo (Site Map)</h2>

```mermaid
graph TD
    A[Acesso via Tráfego / Orgânico] --> B[app/page.js]
    
    subgraph Landing Page
    B --> C[1. Hero Section]
    B --> D[2. Serviços & Aparelhos]
    B --> E[3. Como Funciona]
    B --> F[4. Confiança & Estrutura]
    B --> G[5. Prova Social]
    B --> H[6. FAQ]
    B --> I[7. Contato]
    end

    C -.-> Z(WhatsApp Business)
    D -.-> Z
    I -.-> Z
    W(Botão Flutuante) -.-> Z

    subgraph Integrações Externas
    F -.-> X(Vídeo do YouTube Embed)
    G -.-> Y(API Google Meu Negócio)
    I -.-> V(Google Maps iframe)
    end
```

<br>

<h2><img src="https://img.shields.io/badge/03-Conte%C3%BAdo_das_Se%C3%A7%C3%B5es-black?style=flat-square&color=000000" /> Textos e Seções (Copywriting)</h2>
<p>Os textos foram reescritos para transmitir uma comunicação direta, com as palavras-chave adequadas para a marca.</p>

<details open style="margin-bottom: 10px; border: 1px solid #333; border-radius: 5px; padding: 10px; background-color: #f9f9f9; color: #111;">
  <summary style="font-weight: bold; cursor: pointer; color: #b7df20; background: #111; padding: 10px; border-radius: 4px;">1. Hero Section (Início)</summary>
  <div style="padding: 15px;">
    <p><b>Título:</b> Seu equipamento parou? <span style="color:#8ebf1a; font-weight: bold;">A IND TEC resolve.</span></p>
    <p><b>Subtítulo:</b> Celulares, notebooks, computadores e consoles. Atendimento técnico, diagnóstico e reparos em um só lugar.</p>
    <p><b>Prova Social:</b> ⭐ 5,0 no Google com 83 avaliações</p>
    <p><b>Botão Ação (CTA):</b> Solicitar orçamento</p>
  </div>
</details>

<details style="margin-bottom: 10px; border: 1px solid #333; border-radius: 5px; padding: 10px; background-color: #f9f9f9; color: #111;">
  <summary style="font-weight: bold; cursor: pointer; color: #b7df20; background: #111; padding: 10px; border-radius: 4px;">2. Serviços Especializados</summary>
  <div style="padding: 15px;">
    <p><b>Título da Seção:</b> O que precisa de reparo?</p>
    <ul style="list-style-type: none; padding-left: 0;">
      <li>📱 <b>Celulares:</b> Troca de tela, bateria, conector de carga, placa e manutenção. Todas as marcas.</li>
      <li>💻 <b>Notebooks:</b> Troca de tela, SSD, memória RAM, limpeza e diagnóstico.</li>
      <li>🖥️ <b>Computadores:</b> Manutenção, upgrades, montagem e diagnóstico.</li>
      <li>🎮 <b>Consoles:</b> Manutenção e diagnóstico de videogames.</li>
      <li>🔄 <b>Seminovos:</b> Venda de aparelhos com procedência e garantia.</li>
    </ul>
  </div>
</details>

<details style="margin-bottom: 10px; border: 1px solid #333; border-radius: 5px; padding: 10px; background-color: #f9f9f9; color: #111;">
  <summary style="font-weight: bold; cursor: pointer; color: #b7df20; background: #111; padding: 10px; border-radius: 4px;">3. Como Funciona (Processo)</summary>
  <div style="padding: 15px;">
    <p><b>Título da Seção:</b> Do problema à solução.</p>
    <ol>
      <li><b>Conte o problema:</b> Envie o aparelho, modelo e o que aconteceu pelo WhatsApp.</li>
      <li><b>Receba orientação:</b> Nossa equipe analisa as informações e orienta o próximo passo.</li>
      <li><b>Aprove o serviço:</b> Após o diagnóstico e orçamento, seguimos com o reparo autorizado.</li>
    </ol>
  </div>
</details>

<details style="margin-bottom: 10px; border: 1px solid #333; border-radius: 5px; padding: 10px; background-color: #f9f9f9; color: #111;">
  <summary style="font-weight: bold; cursor: pointer; color: #b7df20; background: #111; padding: 10px; border-radius: 4px;">4. Confiança e Qualidade</summary>
  <div style="padding: 15px;">
    <p><b>Conteúdo Visual:</b></p>
    <ul>
      <li>Galeria de fotos (Loja, fachada e equipe técnica).</li>
      <li>Carrossel de imagens "Antes e Depois" dos aparelhos consertados.</li>
      <li>Espaço para Vídeo Institucional ou demostração de reparo.</li>
      <li><b>Destaque em Texto:</b> Garantia de 90 dias a até 1 ano nos serviços e peças!</li>
    </ul>
  </div>
</details>

<details style="margin-bottom: 10px; border: 1px solid #333; border-radius: 5px; padding: 10px; background-color: #f9f9f9; color: #111;">
  <summary style="font-weight: bold; cursor: pointer; color: #b7df20; background: #111; padding: 10px; border-radius: 4px;">5. Dúvidas Frequentes (FAQ)</summary>
  <div style="padding: 15px;">
    <p><b>P: Fazem manutenção em celulares?</b><br>
    R: Claro, me informe o modelo e o problema que seu aparelho está apresentando.</p>
    <p><b>P: Fazem montagem de computadores?</b><br>
    R: Fazemos sim, você já tem as peças ou gostaria de um orçamento de um novo!</p>
  </div>
</details>

<details style="margin-bottom: 10px; border: 1px solid #333; border-radius: 5px; padding: 10px; background-color: #f9f9f9; color: #111;">
  <summary style="font-weight: bold; cursor: pointer; color: #b7df20; background: #111; padding: 10px; border-radius: 4px;">6. Contato, Localização e Footer</summary>
  <div style="padding: 15px;">
    <p><b>Localização:</b> Av. Jorge Tibiriçá, 1050 - Jardim dos Oliveiras — Campinas/SP</p>
    <p><b>Horários:</b> Segunda a sexta das 09h às 18h | Sábado das 08h às 13h</p>
    <p><b>Pagamento:</b> Débito, crédito, dinheiro, Pix.</p>
    <p><b>Footer:</b> IND TEC — Assistência Técnica e Eletrônicos, © 2026 • Campinas/SP</p>
  </div>
</details>

<br>

<h2><img src="https://img.shields.io/badge/04-Integra%C3%A7%C3%B5es_e_Ferramentas-black?style=flat-square&color=000000" /> Especificação Técnica de Integrações</h2>
<p>Listagem de como as APIs e Widgets de terceiros serão acoplados ao código Next.js.</p>

<table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
  <thead>
    <tr style="background-color: #111; color: #b7df20;">
      <th style="padding: 12px; border: 1px solid #333;">Serviço</th>
      <th style="padding: 12px; border: 1px solid #333;">Implementação Técnica</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">
        <img src="https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white" /><br><br>
        <code>Contato.jsx</code>
      </td>
      <td style="padding: 12px; border: 1px solid #ddd; color: #333;">
        <b>Iframe Dinâmico:</b> Inserção da tag <code>&lt;iframe&gt;</code> nativa do Maps apontando para as coordenadas da loja física. <code>loading="lazy"</code> habilitado para não prejudicar o React Compiler.
      </td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">
        <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" /><br><br>
        <code>WhatsAppButton.jsx</code>
      </td>
      <td style="padding: 12px; border: 1px solid #ddd; color: #333;">
        <b>Link Parametrizado (API):</b> Uso da URL base <code>https://wa.me/5519953243237?text=Olá IND TEC! Quero solicitar um orçamento.</code> Componente flutuante fixo no canto inferior com CSS <code>fixed bottom-4 right-4 z-50</code>.
      </td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">
        <img src="https://img.shields.io/badge/Google_Reviews-F4B400?style=for-the-badge&logo=google&logoColor=white" /><br><br>
        <code>Avaliacoes.jsx</code>
      </td>
      <td style="padding: 12px; border: 1px solid #ddd; color: #333;">
        <b>Widget ou Hardcoded:</b> Os 5 depoimentos extraídos do protótipo e a nota 5.0 serão estilizados com o componente <code>Card</code> do Shadcn. Pode ser acoplado um widget Elfsight no futuro.
      </td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">
        <img src="https://img.shields.io/badge/YouTube_Embed-FF0000?style=for-the-badge&logo=youtube&logoColor=white" /><br><br>
        <code>Confianca.jsx</code>
      </td>
      <td style="padding: 12px; border: 1px solid #ddd; color: #333;">
        <b>Video Container:</b> <code>&lt;iframe&gt;</code> embutido no padrão 16:9 <code>aspect-video</code> do Tailwind. Vídeo curto hospedado no canal da assistência.
      </td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">
        <img src="https://img.shields.io/badge/Analytics-E37400?style=for-the-badge&logo=google-analytics&logoColor=white" /><br>
        <img src="https://img.shields.io/badge/Meta_Pixel-0668E1?style=for-the-badge&logo=meta&logoColor=white" style="margin-top:5px;"/><br><br>
        <code>layout.js</code>
      </td>
      <td style="padding: 12px; border: 1px solid #ddd; color: #333;">
        <b>Rastreamento Global:</b> Inserção dos scripts de tracking (Google Analytics e Pixel Meta) usando a tag <code>&lt;Script strategy="afterInteractive" /&gt;</code> do Next.js para manter alta performance de carregamento.
      </td>
    </tr>
  </tbody>
</table>