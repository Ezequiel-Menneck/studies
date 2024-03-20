-> É uma expressão do JavaScript que faz possível retirar valores de arrays, propriedades de objetos, para variáveis distintas.

```javascript
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
```

-> Começa pelo lado esquerdo do objeto que será "desestruturado". Define qual valores serão retirados a partir da variável mãe
```javascript
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

-> Do mesmo modo podemos desestruturar objetos a partir do "left-hand"
```javascript
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

### Vinculação e atribuição

-> Para Objetos e Arrays destructuring temos 2 patterns: *Binding pattern* e *assignment pattern* com diferenças em sua sintaxe. 

-> Para *binding patterns* o *pattern* começa com a declaração de uma *keyword* (var, let, const). Logo cada propriedade deve ser vinculada a uma variável ou desestruturada futuramente.
```javascript
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
```

-> Todas as variáveis compartilham a mesma declaração, se quisermos re-assignalas porém algumas apenas para leitura, precisamos desestruturar mais vezes, com let and const
```javascript
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable
```

### Valor default

-> Toda propriedade desestruturada pode ter um *defaut value*. O valos default e usado quando a propriedade não está presente, ou tem como valor undefined. Não é usado se a propriedade tem valor null.
```javascript
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null

```

#### Objeto aninhado e desestruturação de array
```javascript
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

#### For of iterando e desestruturando
```javascript
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

```