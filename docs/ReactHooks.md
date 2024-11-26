---
sidebar_position: 12
---

# React Hooks

## 7 Hooks do React Que Você Precisa Conhecer

### **1. useState**

useState é usado para introduzir estado em componentes funcionais, fornecendo acesso ao estado atual e uma função para modificá-lo.
```bash
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // more code here
}
```
Neste caso, o count começa em 0, e o setCount o modifica.


### 2. useEffect

useEffect gerencia efeitos colaterais, como a recuperação de dados e atualizações no DOM. Ele é acionado após cada renderização, mas você pode regular sua execução especificando dependências.

```bash
import React, { useState, useEffect } from 'react';

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // more code here
}

```
O título do documento muda sempre que o count é atualizado.


### 3. useContext

Acesse dados globais ou estado compartilhado diretamente usando useContext, eliminando a necessidade de "prop drilling".
```bash
import React, { useContext } from 'react';

const MyContext = React.createContext();

function DisplayValue() {
  const value = useContext(MyContext);

  // more code here
}
```
Este trecho de código busca o valor de MyContext e o exibe.




### 4. useReducer
O hook useReducer é usado para lidar com lógica de estado mais complexa, fornecendo tanto o estado atual quanto uma função de despacho (dispatch)
```bash
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // more code here
}
```
Esta estrutura ajuda a gerenciar transições de estado de forma sistemática.




### 5. useRef
O hook useRef permite que você interaja com elementos do DOM ou armazene valores de forma persistente entre renderizações, sem disparar uma nova renderização
```bash
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  // more code here
}
```
Essa referência permite que você interaja diretamente com um elemento de entrada (input).


### 6. useMemo
O useMemo melhora o desempenho armazenando o resultado de um cálculo, de forma que ele só seja recalculado quando as dependências forem alteradas.

```bash
import React, { useMemo } from 'react';

function ExpensiveCalculation({ a, b }) {
  const memoizedValue = useMemo(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);

  // more code here
}
```
Isso armazena o resultado e recalcula apenas se houver alterações em a ou b.

### 7. useCallback
A função useCallback ajuda a memoizar funções para evitar recriações desnecessárias.
```bash
import React, { useCallback } from 'react';

function CallBackApp({ a, b }) {
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);

  // more code here
}
```
Isso garante que doSomething seja alterado apenas quando a ou b mudarem.

O useCallback armazena em cache a própria função, enquanto o useMemo armazena o resultado de uma computação.



## O que é prop drillling
Prop drilling é um termo usado no React para descrever o processo de passar dados de um componente pai para componentes filhos em níveis mais profundos da hierarquia de componentes, através de props.

Embora essa abordagem seja funcional, ela pode se tornar problemática em aplicações maiores, onde os dados precisam ser passados por muitos níveis intermediários, mesmo que esses componentes intermediários não utilizem os dados diretamente. Isso torna o código mais difícil de manter e entender.

## exemplo de prop drilling
```bash
function App() {
  const user = "Pedro";

  return (
    <Parent user={user} />
  );
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <p>User: {user}</p>;
}
```
Aqui, a prop user precisa ser passada do componente App para o componente Child através de Parent, mesmo que Parent não use a prop diretamente.



## Creditos [the_coding_wizard](https://www.instagram.com/the_coding_wizard/)


