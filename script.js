const email = document.getElementById('inputEmail');
const senha = document.getElementById('inputSenha');
const btnEntrar = document.getElementById('btnEntrar');

const btnEnviar = document.getElementById('submit-btn');
const inputTerm = document.getElementById('agreement');

const txtArea = document.getElementById('textarea');
const parag = document.getElementById('counter');

// Requisito 3
function verificaLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function habilitaBotao() {
  if (inputTerm.checked) {
    btnEnviar.removeAttribute('disabled');
  }
}

function mostraValor() {
  const carac = txtArea.value.length;
  parag.innerHTML = 500 - carac;
}

btnEntrar.addEventListener('click', verificaLogin);
inputTerm.addEventListener('change', habilitaBotao);
txtArea.addEventListener('keyup', mostraValor);

// Requisito 21

const qualFamilia = () => {
  const family = document.getElementsByClassName('familia');
  let choosed = '';

  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked === true) {
      choosed = family[i].value;
    }
  }

  return choosed;
};

function conteudos() {
  const content = document.getElementsByClassName('subject');
  const contentSelected = [];

  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked === true) {
      contentSelected.push(` ${content[i].value}`);
    }
  }
  return contentSelected;
}

function nota() {
  const rate = document.getElementsByClassName('rate');
  let notaDada;
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked === true) {
      notaDada = rate[i].value;
    }
  }
  return notaDada;
}

function mudaForm(e) {
  e.preventDefault();

  const form = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email2 = document.getElementById('input-email');
  const casa = document.getElementById('house');
  const comentario = document.getElementById('textarea');

  form.innerText = `
  Nome: ${name.value} ${lastName.value}
  Email: ${email2.value}
  Casa: ${casa.value}
  Família: ${qualFamilia()}
  Matérias: ${conteudos()}
  Avaliação: ${nota()}
  Observações: ${comentario.value}`;
}

btnEnviar.addEventListener('click', mudaForm);
