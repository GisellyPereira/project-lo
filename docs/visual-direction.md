# Direção visual da Nutriviva — versão 3

A composição combina fotografia de alimentos, retratos editoriais e uma identidade expressiva para uma marca fictícia de nutrição. As referências fornecidas pela autora orientam o uso de cores, enquadramentos e cenas de comida. Marcas, textos e interfaces das referências não foram copiados.

## Identidade e composição

| Cor | Valor | Papel |
| --- | --- | --- |
| Rosa pétala | `#eeb5c2` | Superfície do cabeçalho e do hero |
| Framboesa | `#8b2448` | Ações e pontos de destaque |
| Ameixa | `#52233e` | Contraste e superfícies profundas |
| Creme | `#fff8ee` | Fundo, respiro e transições onduladas |
| Lavanda | `#ddd0ea` | Apoio à composição de alimentos |
| Azul suave | `#c9def2` | Variação de cor e cenas ao ar livre |

Fraunces sustenta os títulos e a marca; DM Sans atende o texto e a interface. A marca vetorial parte de uma semente dividida e aparece à esquerda no cabeçalho rosa, sem um cartucho decorativo envolvendo o logo.

A abertura preserva a fotografia do prato sobre a superfície rosa. A onda creme foi recuperada com [cream-wave.svg](../public/images/cream-wave.svg), e [paper-grain.svg](../public/images/paper-grain.svg) acrescenta uma textura de papel sutil ao cabeçalho e ao hero. Ambos são assets vetoriais locais.

O Manifesto conserva o mosaico aprovado: alimentos, frutas recortadas, piquenique e retrato em escalas e formatos distintos. O retrato da mulher permanece nesse contexto, sem repetição no acompanhamento de vida em movimento.

Os acompanhamentos usam abas de texto acima de uma fotografia panorâmica, com transição ondulada para a leitura do serviço. As escolhas mantêm estado selecionado, associação entre aba e painel, foco visível e navegação com setas, Home e End. O caminho de vida em movimento usa [movement-meal.webp](../public/images/movement-meal.webp), uma cena de refeição para levar.

A abordagem ocupa uma faixa fotográfica de cozinha com uma nota sobre o cuidado. O caderno reúne uma leitura em destaque com [journal-table.webp](../public/images/journal-table.webp) e duas leituras de apoio em uma composição assimétrica. O fechamento usa [citrus-splash.webp](../public/images/citrus-splash.webp) com recorte transparente.

O conteúdo é organizado por composição, fotografia e tipografia, sem rótulos pequenos acima dos títulos, setas ornamentais, slogans decorativos, linhas repetidas ou numerações de enfeite.

A rolagem suave é global, com Lenis. A preferência `prefers-reduced-motion: reduce` desativa a suavização e mantém a rolagem nativa. O tratamento de movimento também acompanha essa preferência no CSS.

## Assets gerados para o projeto

As nove imagens abaixo foram criadas com a ferramenta integrada `image_gen`. Os PNGs originais estão preservados; o site usa versões WebP otimizadas. As imagens de prato, morango, figo e cítrico conservam transparência real para integração com as superfícies da identidade. As dimensões foram conferidas nos arquivos locais.

| Asset | Dimensões | Original | Versão usada no site |
| --- | --- | --- | --- |
| Prato do hero, preservado | 1374 × 1145 | [hero-food.png](../public/images/hero-food.png) | [hero-food.webp](../public/images/hero-food.webp) |
| Piquenique lilás | 1122 × 1402 | [picnic-lilac.png](../public/images/picnic-lilac.png) | [picnic-lilac.webp](../public/images/picnic-lilac.webp) |
| Cena cotidiana | 1122 × 1402 | [meal-lifestyle.png](../public/images/meal-lifestyle.png) | [meal-lifestyle.webp](../public/images/meal-lifestyle.webp) |
| Morango e gotas | 1147 × 1371 | [strawberry-splash.png](../public/images/strawberry-splash.png) | [strawberry-splash.webp](../public/images/strawberry-splash.webp) |
| Figo em camadas | 1024 × 1536 | [fig-stack.png](../public/images/fig-stack.png) | [fig-stack.webp](../public/images/fig-stack.webp) |
| Preparando uma refeição | 1122 × 1402 | [cooking-editorial.png](../public/images/cooking-editorial.png) | [cooking-editorial.webp](../public/images/cooking-editorial.webp) |
| Refeição para levar | 1122 × 1402 | [movement-meal.png](../public/images/movement-meal.png) | [movement-meal.webp](../public/images/movement-meal.webp) |
| Mesa do caderno | 1536 × 1024 | [journal-table.png](../public/images/journal-table.png) | [journal-table.webp](../public/images/journal-table.webp) |
| Cítrico e água | 1448 × 1086 | [citrus-splash.png](../public/images/citrus-splash.png) | [citrus-splash.webp](../public/images/citrus-splash.webp) |

### Direção dos prompts

Os registros a seguir resumem a direção dada à ferramenta; não são transcrições literais dos prompts.

**Hero — `hero-food`.** Fotografia editorial contemporânea de bowl cerâmico creme com figos roxos, morangos, lâminas de beterraba rosa, grãos dourados e folhas discretas. Vista quase superior em leve perspectiva, prato inteiro e respiro nas bordas. Ingredientes dispostos espontaneamente fora do prato, luz natural difusa e sombra de contato suave. Fundo transparente real, sem texto, marcas, pessoas, utensílios, suplementos ou colagem.

**Piquenique — `picnic-lilac`.** Fotografia editorial vertical, vista de cima, de uma refeição cotidiana sobre tecido xadrez lilás e creme. Morangos, figos, pão rústico, grãos e cerâmica creme em composição espontânea. Mãos adultas entram pelas bordas compartilhando frutas e pão. Luz solar, sombras reais e texturas naturais, com direção framboesa, lilás e creme. Sem rostos, texto, marcas, objetos médicos ou suplementos.

**Cena cotidiana — `meal-lifestyle`.** Retrato vertical de campanha contemporânea com uma mulher adulta fictícia, pele morena, cabelos cacheados e sorriso espontâneo, segurando um prato cerâmico creme com frutas e alimentos. Camisa framboesa, céu azul suave e luz natural. Enquadramento vivo, pele e cabelo com textura, gesto e anatomia plausíveis. Sem uniforme profissional, contexto clínico, texto, marcas ou identificação como nutricionista ou paciente.

**Morango — `strawberry-splash`.** Fotografia editorial macro de estúdio em alta velocidade. Morango vermelho inteiro e realista envolvido por um splash compacto de líquido rosado e gotas, com no máximo duas folhas naturais. Textura natural, fundo com alpha transparente, sem texto, pessoas ou marcas.

**Figo — `fig-stack`.** Figo roxo em três camadas levitando em uma coluna curta, visto em perspectiva de três quartos. Interior rosado com sementes expostas, gotas e fios de umidade natural, textura realista e fundo transparente. Sem texto, pessoas ou marcas. Uma edição adicional removeu fundo e halo preservando a fruta e sua posição.

**Preparando uma refeição — `cooking-editorial`.** Fotografia editorial vertical de dois adultos brasileiros fictícios preparando uma refeição juntos. Cozinha creme com luz natural, detalhes ameixa e lavanda, avental azul suave e roupa framboesa. Enquadramento com rostos inteiros e bancada com frutas, grãos e pão, texturas reais e interação espontânea. Sem texto, marcas ou contexto clínico.

**Refeição para levar — `movement-meal`.** Fotografia editorial vertical de um lanche cotidiano preparado para uma rotina ativa: recipiente metálico com sanduíche de pão rústico, framboesas, figos e nozes, acompanhado por uma garrafa lilás. Bancada creme, tecido azul suave, luz de janela e sombras naturais. Alimentos com textura real e cena prática de vida cotidiana, sem personagens, texto ou marcas.

**Mesa do caderno — `journal-table`.** Fotografia editorial horizontal de uma mesa de café da manhã, com bowl cerâmico de figos, morangos e framboesas, copo de iogurte e granola, café em xícara creme e tecido lilás. Luz natural sobre uma superfície creme, sombras suaves e detalhes táteis. Composição de revista de alimentos, sem pessoas, texto ou marcas.

**Cítrico e água — `citrus-splash`.** Fotografia de estúdio de uma fruta cítrica inteira e uma metade com polpa vermelha em destaque, acompanhadas por um splash compacto de água e gotas. Casca, gomos e umidade com textura realista, enquadramento próximo e composição isolada em fundo alpha transparente. Sem pessoas, texto, marcas ou elementos gráficos.

Todas as cenas são ilustrativas. As pessoas geradas são modelos fictícios; as imagens não representam equipe, profissionais, pacientes ou clientes da Nutriviva.

## Acervo fotográfico complementar

Os arquivos abaixo permanecem no acervo local do projeto e complementam páginas de acompanhamento, leitura e contato.

| Arquivo | Fonte |
| --- | --- |
| [food-table.jpg](../public/images/food-table.jpg) | [Unsplash — mesa de alimentos](https://images.unsplash.com/photo-1490645935967-10de6ba17061) |
| [cooking.jpg](../public/images/cooking.jpg) | [Unsplash — cozinha](https://images.unsplash.com/photo-1556909114-f6e7ad7d3136) |
| [breakfast.jpg](../public/images/breakfast.jpg) | [Unsplash — café da manhã](https://images.unsplash.com/photo-1484723091739-30a097e8f929) |
| [berries.jpg](../public/images/berries.jpg) | [Unsplash — fotografia de abacaxi](https://images.unsplash.com/photo-1490885578174-acda8905c2c6) |

O nome legado `berries.jpg` pertence à fotografia de abacaxi; esse arquivo não ilustra o acompanhamento de vida em movimento. Essas fotografias têm função ilustrativa e não identificam pessoas vinculadas à marca.
