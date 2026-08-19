# Política de Segurança

A segurança da **IND TEC Assistência Técnica e Eletrônicos** e de seus clientes é uma prioridade. Agradecemos a contribuição da comunidade em ajudar a manter este projeto seguro.

## Reportando uma Vulnerabilidade

Se você descobriu uma vulnerabilidade de segurança nesta aplicação, pedimos que **não** a divulgue publicamente (criando Issues ou Pull Requests abertos) até que possamos corrigi-la.

**Para reportar uma vulnerabilidade, entre em contato através dos seguintes canais:**

- **E-mail:** [missolapedro@gmail.com]
- **Forma alternativa:** Abra uma Issue **privada** (se o repositório estiver configurado para isso) ou entre em contato diretamente com o gestor do projeto (Pedro).

## O que esperar ao reportar

1.  **Confirmação:** Responderemos à sua notificação em até **48 horas** para confirmar o recebimento da sua descoberta.
2.  **Análise:** Investigaremos o relatório para validar a existência e o impacto da vulnerabilidade.
3.  **Correção:** Trabalharemos em uma correção assim que a vulnerabilidade for confirmada. O prazo para resolução dependerá da complexidade do problema.
4.  **Divulgação:** Após a correção ser implantada em produção, publicaremos um agradecimento (com o seu consentimento) e atualizaremos a documentação, se necessário.

## Práticas de Segurança Adotadas no Projeto

- **Gerenciamento de Dependências:** Utilizamos `pnpm` com lockfile para garantir a integridade das versões das bibliotecas.
- **Scripts Assíncronos:** Integrações como Google Analytics e Pixel da Meta são carregadas de forma assíncrona para não bloquear o carregamento da página.
- **Componentes Isolados:** A aplicação não possui back-end próprio ou banco de dados, atuando estritamente como uma interface estática/SSG, o que reduz significativamente a superfície de ataque.
- **Compilação Moderna:** Utilizamos o React Compiler e as otimizações nativas do Next.js para garantir código limpo e performático.

## Escopo

Esta política de segurança se aplica estritamente ao código-fonte deste repositório. Não cobre vulnerabilidades em serviços de terceiros integrados (WhatsApp, Google Maps, YouTube, etc.), que possuem suas próprias políticas de segurança.

---

*Agradecemos por nos ajudar a manter a IND TEC segura!*