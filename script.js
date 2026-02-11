/* ========== CONFIGURAÇÃO E DADOS ESTÁTICOS ========== */

const opcoes = [
  { texto: "De jeito nenhum", valor: 0 },
  { texto: "Vários dias", valor: 1 },
  { texto: "Mais da metade dos dias", valor: 2 },
  { texto: "Quase todos os dias", valor: 3 }
];

const opcoesPSQI = [
  { texto: "Nenhuma no último mês", valor: 0 },
  { texto: "Menos de uma vez por semana", valor: 1 },
  { texto: "Uma ou duas vezes por semana", valor: 2 },
  { texto: "Três ou mais vezes na semana", valor: 3 }
];

const psqi5Itens = [
  "A) Não conseguiu adormecer em até 30 minutos",
  "B) Acordou no meio da noite ou de manhã cedo",
  "C) Precisou levantar para ir ao banheiro",
  "D) Não conseguiu respirar confortavelmente",
  "E) Tossiu ou roncou forte",
  "F) Sentiu muito frio",
  "G) Sentiu muito calor",
  "H) Teve sonhos ruins",
  "I) Teve dor",
  "J) Outras razões (descreva no campo ao lado)"
];

const psqi10ExtraItens = [
  "E) Ronco forte",
  "F) Longas paradas de respiração enquanto dormia",
  "G) Contrações ou puxões de pernas enquanto dormia",
  "H) Episódios de desorientação ou confusão durante o sono",
  "I) Outras alterações (inquietações) enquanto você dorme"
];

const gad7Perguntas = [
  "Sentir-se nervoso, ansioso ou tenso",
  "Não conseguir parar ou controlar a preocupação",
  "Preocupar-se demais com coisas diferentes",
  "Dificuldade em relaxar",
  "Tão inquieto que é difícil ficar parado",
  "Ficar irritado ou aborrecido com facilidade",
  "Sentir medo, como se algo terrível pudesse acontecer"
];

const phq9Perguntas = [
  "Pouco interesse ou prazer em fazer coisas",
  "Sentindo-se triste, deprimido ou sem esperança",
  "Dificuldade em adormecer, manter o sono ou dormir demais",
  "Sentir-se cansado ou com pouca energia",
  "Falta de apetite ou comer em excesso",
  "Sentir-se mal consigo mesmo ou achar que é um fracasso",
  "Dificuldade de concentração",
  "Mover-se ou falar devagar demais ou agitação excessiva",
  "Pensamentos de que estaria melhor morto ou de se machucar"
];

const whoqolPerguntas = [
  "Como você avaliaria sua qualidade de vida? (1=muito ruim a 5=muito boa)",
  "Quão satisfeito(a) você está com a sua saúde? (1=muito insatisfeito a 5=muito satisfeito)",
  "Em que medida sua dor (física) impede você de fazer o que precisa? (1=nada a 5=extremamente)",
  "O quanto você precisa de algum tratamento médico para levar sua vida diária? (1=nada a 5=extremamente)",
  "O quanto você aproveita a vida? (1=nada a 5=extremamente)",
  "Em que medida você acha que a sua vida tem sentido? (1=nada a 5=extremamente)",
  "O quanto você consegue se concentrar? (1=nada a 5=extremamente)",
  "O quanto você se sente em segurança em sua vida diária? (1=nada a 5=extremamente)",
  "Quão saudável é o seu ambiente físico (clima, barulho, poluição, atrativos)? (1=nada a 5=extremamente)",
  "Você tem energia suficiente para seu dia-a-dia? (1=nada a 5=completamente)",
  "Você é capaz de aceitar sua aparência física? (1=nada a 5=completamente)",
  "Você tem dinheiro suficiente para satisfazer suas necessidades? (1=nada a 5=completamente)",
  "Quão disponíveis para você estão as informações que precisa no seu dia-a-dia? (1=nada a 5=completamente)",
  "Em que medida você tem oportunidades de atividade de lazer? (1=nada a 5=completamente)",
  "Quão bem você é capaz de se locomover? (1=muito ruim a 5=muito bom)",
  "Quão satisfeito(a) você está com o seu sono? (1=muito insatisfeito a 5=muito satisfeito)",
  "Quão satisfeito(a) você está com sua capacidade de desempenhar as atividades do seu dia-a-dia? (1=muito insatisfeito a 5=muito satisfeito)",
  "Quão satisfeito(a) você está com sua capacidade para o trabalho? (1=muito insatisfeito a 5=muito satisfeito)",
  "Quão satisfeito(a) você está consigo mesmo? (1=muito insatisfeito a 5=muito satisfeito)",
  "Quão satisfeito(a) você está com suas relações pessoais (amigos, parentes, conhecidos, colegas)? (1=muito insatisfeito a 5=muito satisfeito)",
  "Quão satisfeito(a) você está com sua vida sexual? (1=muito insatisfeito a 5=muito satisfeito)",
  "Quão satisfeito(a) você está com o apoio que você recebe de seus amigos? (1=muito insatisfeito a 5=muito satisfeito)",
  "Quão satisfeito(a) você está com as condições do local onde mora? (1=muito insatisfeito a 5=muito satisfeito)",
  "Quão satisfeito(a) você está com o seu acesso aos serviços de saúde? (1=muito insatisfeito a 5=muito satisfeito)",
  "Quão satisfeito(a) você está com o seu meio de transporte? (1=muito insatisfeito a 5=muito satisfeito)",
  "Com que frequência você tem sentimentos negativos (mau humor, desespero, ansiedade, depressão)? (1=nunca a 5=sempre)"
];

/* ========== VALIDAÇÃO ========== */

function parseNumero(val, min, max, padrao) {
  const n = Number(val);
  if (val === "" || val === null || isNaN(n)) return padrao;
  if (min != null && n < min) return min;
  if (max != null && n > max) return max;
  return n;
}

function getRadioValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

function getRadioValueNum(name, padrao = 0) {
  const v = getRadioValue(name);
  return v !== null ? parseInt(v, 10) : padrao;
}

/* ========== COLETA DE DADOS FÍSICOS ========== */

function collectDadosFisicos() {
  const idadeEl = document.getElementById("idade");
  const pesoEl = document.getElementById("peso");
  const alturaEl = document.getElementById("altura");
  const cinturaEl = document.getElementById("cintura");
  const quadrilEl = document.getElementById("quadril");

  const idade = parseNumero(idadeEl && idadeEl.value, 1, 120, null);
  const peso = pesoEl ? parseNumero(pesoEl.value, 20, 300, null) : null;
  const altura = alturaEl ? parseNumero(alturaEl.value, 0.5, 2.5, null) : null;
  const cintura = cinturaEl ? parseNumero(cinturaEl.value, 0, 200, null) : null;
  const quadril = quadrilEl ? parseNumero(quadrilEl.value, 0, 200, null) : null;

  const dataColeta = new Date();
  return {
    idade: idade != null ? idade : "",
    peso: peso != null ? peso : "",
    altura: altura != null ? altura : "",
    cintura: cintura != null ? cintura : "",
    quadril: quadril != null ? quadril : "",
    dataColeta: dataColeta.toISOString().slice(0, 19).replace("T", " "),
    dataColetaYYYYMMDD: dataColeta.toISOString().slice(0, 10),
    dataColetaHHMM: dataColeta.toTimeString().slice(0, 5)
  };
}

/* ========== CÁLCULOS GAD-7 / PHQ-9 ========== */

function calcularGAD7() {
  let score = 0;
  let todasPreenchidas = true;
  gad7Perguntas.forEach((_, i) => {
    const v = getRadioValueNum("g" + i, -1);
    if (v < 0) todasPreenchidas = false;
    else score += v;
  });
  return { score, todasPreenchidas };
}

function calcularPHQ9() {
  let score = 0;
  let todasPreenchidas = true;
  let riscoSuicidio = false;
  phq9Perguntas.forEach((_, i) => {
    const v = getRadioValueNum("p" + i, -1);
    if (v < 0) todasPreenchidas = false;
    else {
      score += v;
      if (i === 8 && v > 0) riscoSuicidio = true;
    }
  });
  return { score, todasPreenchidas, riscoSuicidio };
}

/* ========== CÁLCULOS PSQI ========== */

function calcularPSQI() {
  const q1 = document.getElementById("psqi1") ? document.getElementById("psqi1").value : "";
  const q2 = parseNumero(document.getElementById("psqi2") && document.getElementById("psqi2").value, 0, 300, 0);
  const q3 = document.getElementById("psqi3") ? document.getElementById("psqi3").value : "";
  const q4 = parseNumero(document.getElementById("psqi4") && document.getElementById("psqi4").value, 0, 24, 0);
  const q6 = getRadioValueNum("psqi6", 0);
  const q7 = getRadioValueNum("psqi7", 0);
  const q8 = getRadioValueNum("psqi8", 0);
  const q9 = getRadioValueNum("psqi9", 0);

  let sum5 = 0;
  for (let i = 0; i < 10; i++) {
    sum5 += getRadioValueNum("psqi5_" + i, 0);
  }
  const comp5 = sum5 <= 0 ? 0 : sum5 <= 9 ? 1 : sum5 <= 18 ? 2 : 3;

  let minBed = 0;
  if (q1 && q3) {
    const [h1, m1] = q1.split(":").map(Number);
    const [h3, m3] = q3.split(":").map(Number);
    minBed = (h3 * 60 + m3) - (h1 * 60 + m1);
    if (minBed <= 0) minBed += 24 * 60;
  }
  const efficiency = minBed > 0 ? (q4 * 60 / minBed) * 100 : 0;
  const comp4 = efficiency >= 85 ? 0 : efficiency >= 75 ? 1 : efficiency >= 65 ? 2 : 3;

  const comp1 = q6;
  const comp2lat = q2 <= 15 ? 0 : q2 <= 30 ? 1 : q2 <= 60 ? 2 : 3;
  const q5a = getRadioValueNum("psqi5_0", 0);
  const sum2 = comp2lat + q5a;
  const comp2 = sum2 === 0 ? 0 : sum2 <= 2 ? 1 : sum2 <= 4 ? 2 : 3;
  const comp3 = q4 > 7 ? 0 : q4 >= 6 ? 1 : q4 >= 5 ? 2 : 3;
  const comp6 = q7;
  const comp7sum = q8 + q9;
  const comp7 = comp7sum === 0 ? 0 : comp7sum <= 2 ? 1 : comp7sum <= 4 ? 2 : 3;

  const global = comp1 + comp2 + comp3 + comp4 + comp5 + comp6 + comp7;
  return {
    comp1, comp2, comp3, comp4, comp5, comp6, comp7,
    global,
    q1, q2, q3, q4, q6, q7, q8, q9,
    efficiency: efficiency.toFixed(1)
  };
}

/* ========== CÁLCULOS WHOQOL ========== */

function getWhoqolRespostas() {
  return whoqolPerguntas.map((_, i) => {
    const v = getRadioValue("whoqol_" + i);
    return v !== null ? parseInt(v, 10) : null;
  });
}

function calcularWHOQOL(respostas) {
  if (!respostas || respostas.length < 26) return null;
  const rev = (v) => 6 - v;
  const f = (indices, reverseItems = []) => {
    let sum = 0;
    indices.forEach((idx) => {
      const raw = respostas[idx - 1];
      if (raw == null) return;
      sum += reverseItems.includes(idx) ? rev(raw) : raw;
    });
    const n = indices.length;
    return n > 0 ? ((sum - n) / (n * 4)) * 100 : 0;
  };
  return {
    fisico: Math.round(f([3, 4, 10, 15, 16, 17, 18], [3, 4])),
    psicologico: Math.round(f([5, 6, 7, 11, 19, 26], [26])),
    social: Math.round(f([20, 21, 22], [])),
    ambiente: Math.round(f([8, 9, 12, 13, 14, 23, 24, 25], [])),
    qualidadeVidaGeral: respostas[0],
    satisfacaoSaude: respostas[1],
    respostas
  };
}

/* ========== OBJETO DE EXPORTAÇÃO (UMA LINHA POR PARTICIPANTE) ========== */

function buildObjetoExportacao(dadosFisicos, gad7, phq9, psqi, whoqol) {
  const row = {
    Idade: dadosFisicos.idade,
    Peso: dadosFisicos.peso,
    Altura: dadosFisicos.altura,
    Cintura: dadosFisicos.cintura,
    Quadril: dadosFisicos.quadril,
    Data_Coleta: dadosFisicos.dataColeta,
    GAD7: gad7.score,
    PHQ9: phq9.score,
    RiscoSuicidio_PHQ9_item9: phq9.riscoSuicidio ? "Sim" : "Não",
    PSQI: psqi.global,
    PSQI_Comp1_Qualidade: psqi.comp1,
    PSQI_Comp2_Latencia: psqi.comp2,
    PSQI_Comp3_Duracao: psqi.comp3,
    PSQI_Comp4_Eficiencia: psqi.comp4,
    PSQI_Comp5_Perturbacoes: psqi.comp5,
    PSQI_Comp6_Medicacao: psqi.comp6,
    PSQI_Comp7_Disfuncao: psqi.comp7,
    PSQI_Hora_Deitar: psqi.q1,
    PSQI_Minutos_Dormir: psqi.q2,
    PSQI_Hora_Levantar: psqi.q3,
    PSQI_Horas_Sono: psqi.q4,
    PSQI_Eficiencia_Pct: psqi.efficiency
  };

  gad7Perguntas.forEach((_, i) => {
    row["GAD7_Q" + (i + 1)] = gad7.respostas[i] != null ? gad7.respostas[i] : "";
  });
  phq9Perguntas.forEach((_, i) => {
    row["PHQ9_Q" + (i + 1)] = phq9.respostas[i] != null ? phq9.respostas[i] : "";
  });

  if (whoqol) {
    row.WHOQOL_Qualidade_Vida_Geral = whoqol.qualidadeVidaGeral;
    row.WHOQOL_Satisfacao_Saude = whoqol.satisfacaoSaude;
    row.WHOQOL_Fisico = whoqol.fisico;
    row.WHOQOL_Psicológico = whoqol.psicologico;
    row.WHOQOL_Social = whoqol.social;
    row.WHOQOL_Ambiente = whoqol.ambiente;
    (whoqol.respostas || []).forEach((v, i) => {
      row["WHOQOL_Q" + (i + 1)] = v != null ? v : "";
    });
  }

  return row;
}

/* ========== INTERPRETAÇÕES ========== */

function interpretacaoGAD(score) {
  if (score <= 4) return "Ansiedade mínima";
  if (score <= 9) return "Ansiedade leve";
  if (score <= 14) return "Ansiedade moderada";
  return "Ansiedade grave";
}

function interpretacaoPHQ(score) {
  if (score <= 4) return "Nenhum ou mínimo";
  if (score <= 9) return "Depressão leve";
  if (score <= 14) return "Depressão moderada";
  if (score <= 19) return "Depressão moderadamente grave";
  return "Depressão grave";
}

function interpretacaoPSQI(global) {
  if (global <= 5) return "Boa qualidade do sono";
  if (global <= 10) return "Qualidade do sono prejudicada";
  return "Má qualidade do sono";
}

/* ========== GERAÇÃO DE PERGUNTAS NO DOM ========== */

function gerarQuestoes(lista, containerId, prefixo) {
  const container = document.getElementById(containerId);
  if (!container) return;
  lista.forEach((pergunta, i) => {
    let html = `<div class="question"><label>${i + 1}. ${pergunta}</label>`;
    opcoes.forEach(op => {
      html += `<label><input type="radio" name="${prefixo}${i}" value="${op.valor}" required> ${op.texto}</label>`;
    });
    html += "</div>";
    container.innerHTML += html;
  });
}

function gerarOpcoesPSQI(namePrefix, required) {
  const req = required !== false ? " required" : "";
  return opcoesPSQI.map(op =>
    `<label class="radio-row"><input type="radio" name="${namePrefix}" value="${op.valor}"${req}> ${op.texto}</label>`
  ).join("");
}

function gerarWhoqol() {
  const container = document.getElementById("whoqol");
  if (!container) return;
  whoqolPerguntas.forEach((texto, i) => {
    let html = `<div class="question"><label>${i + 1}. ${texto}</label><div class="whoqol-opcoes">`;
    for (let v = 1; v <= 5; v++) {
      html += `<label class="radio-row"><input type="radio" name="whoqol_${i}" value="${v}" required> ${v}</label>`;
    }
    html += "</div></div>";
    container.innerHTML += html;
  });
}

/* ========== INICIALIZAÇÃO ========== */

let dadosExportacao = null;

function init() {
  gerarQuestoes(gad7Perguntas, "gad7", "g");
  gerarQuestoes(phq9Perguntas, "phq9", "p");

  const psqi5El = document.getElementById("psqi5");
  if (psqi5El) {
    psqi5El.innerHTML = psqi5Itens.map((titulo, i) =>
      `<div class="subquestion"><label>${titulo}</label><div class="opcoes-psqi">${gerarOpcoesPSQI("psqi5_" + i)}</div>${i === 9 ? '<input type="text" id="psqi5j_outro" placeholder="Descreva outras razões" class="input-text-extra">' : ""}</div>`
    ).join("");
  }

  document.getElementById("psqi7") && (document.getElementById("psqi7").innerHTML = gerarOpcoesPSQI("psqi7"));
  document.getElementById("psqi8") && (document.getElementById("psqi8").innerHTML = gerarOpcoesPSQI("psqi8"));

  const psqi10Extra = document.getElementById("psqi10_extra");
  if (psqi10Extra) {
    psqi10Extra.innerHTML = psqi10ExtraItens.map((titulo, i) =>
      `<div class="subquestion"><label>${titulo}</label><div class="opcoes-psqi">${gerarOpcoesPSQI("psqi10e_" + i, false)}</div></div>`
    ).join("");
  }

  gerarWhoqol();

  const form = document.getElementById("formulario");
  const btnExport = document.getElementById("btnExportarExcel");

  if (btnExport) btnExport.disabled = true;

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const dadosFisicos = collectDadosFisicos();
      if (dadosFisicos.idade === "" || dadosFisicos.idade == null) {
        alert("Preencha a Idade (obrigatório).");
        return;
      }

      const gad7 = calcularGAD7();
      const phq9 = calcularPHQ9();
      if (!gad7.todasPreenchidas || !phq9.todasPreenchidas) {
        alert("Responda todas as questões do GAD-7 e do PHQ-9.");
        return;
      }

      const psqi = calcularPSQI();
      const whoqolRespostas = getWhoqolRespostas();
      const whoqol = calcularWHOQOL(whoqolRespostas);

      gad7.respostas = gad7Perguntas.map((_, i) => getRadioValue("g" + i));
      phq9.respostas = phq9Perguntas.map((_, i) => getRadioValue("p" + i));

      dadosExportacao = buildObjetoExportacao(dadosFisicos, gad7, phq9, psqi, whoqol);

      const whoqolHtml = whoqol ? `
        <p><strong>WHOQOL-BREF:</strong></p>
        <p class="resultado-detalhe">Qualidade de vida geral: ${whoqol.qualidadeVidaGeral}/5 | Satisfação com saúde: ${whoqol.satisfacaoSaude}/5</p>
        <p class="resultado-detalhe">Domínio Físico: ${whoqol.fisico} | Psicológico: ${whoqol.psicologico} | Social: ${whoqol.social} | Meio ambiente: ${whoqol.ambiente} (0-100)</p>
      ` : "";

      const resultadoEl = document.getElementById("resultado");
      if (resultadoEl) {
        resultadoEl.style.display = "block";
        resultadoEl.innerHTML = `
          <h3>Resultado</h3>
          <p><strong>GAD-7:</strong> ${gad7.score} pontos – ${interpretacaoGAD(gad7.score)}</p>
          <p><strong>PHQ-9:</strong> ${phq9.score} pontos – ${interpretacaoPHQ(phq9.score)}</p>
          <p><strong>PSQI:</strong> ${psqi.global} pontos – ${interpretacaoPSQI(psqi.global)}</p>
          <p class="resultado-detalhe">Componentes PSQI: Qualidade ${psqi.comp1} | Latência ${psqi.comp2} | Duração ${psqi.comp3} | Eficiência ${psqi.comp4} | Perturbações ${psqi.comp5} | Medicação ${psqi.comp6} | Disfunção ${psqi.comp7}</p>
          ${whoqolHtml}
          ${phq9.riscoSuicidio ? '<p class="alerta">⚠ Atenção: resposta positiva na questão 9 do PHQ-9. Avaliação profissional imediata é recomendada.</p>' : ""}
          <hr>
          <p><em>Este questionário é uma ferramenta de triagem e não substitui avaliação clínica profissional.</em></p>
        `;
      }

      const exportArea = document.getElementById("exportArea");
      if (exportArea) exportArea.style.display = "block";
      if (btnExport) btnExport.disabled = false;
    });
  }

  if (btnExport) {
    btnExport.addEventListener("click", function () {
      if (!dadosExportacao || typeof XLSX === "undefined") return;
      if (this.disabled) return;

      const keys = Object.keys(dadosExportacao).filter(k => !k.startsWith("_"));
      const headerRow = keys;
      const valueRow = keys.map(k => dadosExportacao[k]);

      const ws = XLSX.utils.aoa_to_sheet([headerRow, valueRow]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Dados");

      const now = new Date();
      const YYYY = now.getFullYear();
      const MM = String(now.getMonth() + 1).padStart(2, "0");
      const DD = String(now.getDate()).padStart(2, "0");
      const HH = String(now.getHours()).padStart(2, "0");
      const MM2 = String(now.getMinutes()).padStart(2, "0");
      const nomeArquivo = `pesquisa_anonima_${YYYY}${MM}${DD}_${HH}${MM2}.xlsx`;
      XLSX.writeFile(wb, nomeArquivo);
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
