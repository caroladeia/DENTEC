const procedimentos = [
    {
        titulo: "LASERTERAPIA",
        mediaSrc: "https://dp0rksi384o97.cloudfront.net/media/4618/conversions/main-limpador-de-vi%CC%81deo-webp.webp",
        mediaType: "video", // Tipo de mídia: vídeo do YouTube
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "https://dp0rksi384o97.cloudfront.net/media/4618/conversions/main-limpador-de-vi%CC%81deo-webp.webp", // Link para o vídeo completo no YouTube
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Uso de laser para acelerar a cicatrização e tratar inflamações na boca." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Aparelho de laser específico para tratamentos dentários." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Redução da dor, cicatrização mais rápida e menos inflamação." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Aplicação de laser na área tratada, em sessões rápidas." }
        ]
    },
    
    {
        titulo: "APICECTOMIA",
        mediaSrc: "https://www.youtube.com/embed/jgPQU9NOXvg?si=IUmIblBnrHeaOibi&amp;start=8",
        mediaType: "video",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "https://www.youtube.com/embed/jgPQU9NOXvg?si=IUmIblBnrHeaOibi&amp;start=8",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Cirurgia para remover o final da raiz de um dente." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Instrumentos cirúrgicos pequenos e delicados." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Infecção eliminada e dente preservado." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Pequena cirurgia feita com anestesia local." }
        ]
    },
    {
        titulo: "BICHECTOMIA",
        mediaSrc: "img/bichectomia.mp4",
        mediaType: "video",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/bichectomia_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Remoção das bolas de Bichat para afinar o rosto." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Pinças e bisturi delicados." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Rosto mais fino e delineado." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Procedimento cirúrgico rápido com anestesia local." }
        ]
    },
    {
        titulo: "ENXERTO GENGIVAL",
        mediaSrc: "img/enxerto_gengival.jpg",
        mediaType: "image",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/enxerto_gengival_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Adição de tecido gengival para corrigir retrações ou defeitos." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Bisturi e pinças finas." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Gengiva mais saudável e com melhor estética." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Retirada de tecido de outra parte da boca e aplicação na área afetada." }
        ]
    },
    {
        titulo: "PERIODONTIA",
        mediaSrc: "img/periodontia.gif",
        mediaType: "image",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/periodontia_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Tratamento das gengivas e ossos que sustentam os dentes." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Curetas e aparelhos de ultrassom." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Gengivas mais saudáveis e prevenção de perda dentária." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Limpeza profunda abaixo da linha da gengiva." }
        ]
    },
    {
        titulo: "ORTODONTIA",
        mediaSrc: "img/ortodontia.gif",
        mediaType: "image",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/ortodontia_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Correção do alinhamento dos dentes e mordida." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Aparelhos fixos ou móveis, braquetes, fios." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Sorriso mais alinhado e mordida corrigida." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Uso de aparelhos por um período determinado." }
        ]
    },
    {
        titulo: "IMPLANTES DENTÁRIOS",
        mediaSrc: "img/implantes.mp4",
        mediaType: "video",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/implantes_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Substituição de dentes perdidos por pinos de titânio." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Brocas cirúrgicas e pinos de titânio." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Dentes fixos e aparência natural." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Cirurgia para instalação dos pinos e colocação das próteses." }
        ]
    },
    {
        titulo: "FACETAS DENTÁRIAS",
        mediaSrc: "img/facetas.jpg",
        mediaType: "image",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/facetas_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Capas de porcelana que cobrem a parte frontal dos dentes." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Instrumentos de moldagem e ajuste de porcelana." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Sorriso estético com dentes mais brancos e uniformes." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Colagem das facetas sobre os dentes naturais." }
        ]
    },
    {
        titulo: "LIMPEZA PROFISSIONAL (PROFILAXIA)",
        mediaSrc: "img/profilaxia.mp4",
        mediaType: "video",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/profilaxia_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Limpeza feita no consultório para remover placa e tártaro." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Instrumentos de raspagem e ultrassom." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Dentes mais limpos e gengivas saudáveis." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Limpeza feita com ferramentas especiais para garantir a saúde bucal." }
        ]
    },
    {
        titulo: "RESTAURAÇÃO DENTÁRIA",
        mediaSrc: "img/restauracao.jpg",
        mediaType: "image",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/restauracao_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Reparo de dentes danificados por cáries ou traumas." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Brocas e materiais restauradores como resina ou amálgama." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Dentes restaurados com aparência natural." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Remoção da área danificada e preenchimento com material adequado." }
        ]
    },
    {
        titulo: "TRATAMENTO DE CANAL (ENDODONTIA)",
        mediaSrc: "img/tratamento_canal.mp4",
        mediaType: "video",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/tratamento_canal_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Remoção da polpa infeccionada do interior do dente." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Limas, brocas e obturadores." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Dente preservado e livre de infecções." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Limpeza interna do dente e fechamento do canal." }
        ]
    },
    {
        titulo: "CLAREAMENTO DENTAL",
        mediaSrc: "img/clareamento.jpg",
        mediaType: "image",
        exemploVisual: "EXEMPLO VISUAL",
        mediaLink: "img/clareamento_full.png",
        cards: [
            { img: "img/um.png", titulo: "O QUE É", descricao: "Procedimento para deixar os dentes mais brancos." },
            { img: "img/dois.png", titulo: "INSTRUMENTOS", descricao: "Géis clareadores e luzes especiais." },
            { img: "img/tres.png", titulo: "RESULTADOS", descricao: "Dentes mais brancos e brilhantes." },
            { img: "img/quatro.png", titulo: "PROCESSO", descricao: "Aplicação de produtos clareadores sobre os dentes." }
        ]
    }
];


let currentIndex = 0;

// Referências aos elementos do DOM
const videoElement = document.getElementById("video");
const imageElement = document.getElementById("image");
const tituloElement = document.getElementById("procedimentoTitulo");
const exemploElement = document.getElementById("exemploVisual");
const cardContainer = document.getElementById("card-container");

function updateContent(index) {
    const procedimento = procedimentos[index];

    // Atualizar mídia
    if (procedimento.mediaType === "video") {
        videoElement.src = procedimento.mediaSrc;
        videoElement.style.display = "block";
        imageElement.style.display = "none";
    } else if (procedimento.mediaType === "image") {
        imageElement.src = procedimento.mediaSrc;
        imageElement.style.display = "block";
        videoElement.style.display = "none";
    }

    tituloElement.textContent = procedimento.titulo;
    exemploElement.textContent = procedimento.exemploVisual;

    // Atualiza os cards
    cardContainer.innerHTML = ''; // Limpa os cards existentes
    const linhas = [];
    for (let i = 0; i < procedimento.cards.length; i += 2) {
        const linha = document.createElement('div');
        linha.className = 'linha';

        for (let j = i; j < i + 2 && j < procedimento.cards.length; j++) {
            const cardData = procedimento.cards[j];

            const flipCard = document.createElement('div');
            flipCard.className = 'flip-card';

            const flipCardInner = document.createElement('div');
            flipCardInner.className = 'flip-card-inner';

            const cardFront = document.createElement('div');
            cardFront.className = 'card';
            const img = document.createElement('img');
            img.src = cardData.img;
            const h2 = document.createElement('h2');
            h2.textContent = cardData.titulo;

            cardFront.appendChild(img);
            cardFront.appendChild(h2);

            const cardBack = document.createElement('div');
            cardBack.className = 'tras';
            cardBack.textContent = cardData.descricao;

            flipCardInner.appendChild(cardFront);
            flipCardInner.appendChild(cardBack);
            flipCard.appendChild(flipCardInner);

            linha.appendChild(flipCard);
        }

        cardContainer.appendChild(linha);
    }
}

// Ações nas setas
document.getElementById("next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % procedimentos.length;
    updateContent(currentIndex);
});

document.getElementById("prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + procedimentos.length) % procedimentos.length;
    updateContent(currentIndex);
});

// Carregar o conteúdo inicial
updateContent(currentIndex);

//------------------------------------ TÓPICOS E BARRA - PARTE 2 - CUIDADOS INFANTIS ---------------------------
function changeContent(buttonNumber) {
    // Remove a classe 'active' de todos os botões
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));

    // Adiciona a classe 'active' ao botão clicado
    document.getElementById(`btn${buttonNumber}`).classList.add('active');

    // Atualiza a posição da barra de progresso
    const progress = document.getElementById('progress');
    progress.style.top = `${(buttonNumber - 1) * 100}px`; // Mover a barra de acordo com o botão

    // Trocar as imagens e as descrições
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const description1 = document.getElementById('description1');
    const description2 = document.getElementById('description2');

    switch (buttonNumber) {
        case 1:
            image1.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfggRU_K5BqzLD_VIZx-jRQG1TxoZK7MLPpBjDjiCToRwU700EwaRdeFvzQkWXL8O-3k5s6AP68YgSRTUY4r_wCN0xagRSVbbPgzMEF1Qkt-xvQf4-XoFErfy0gTrxgGz2X6lrURPVMWE/s320/d3.gif';
            description1.textContent = 'Explique de maneira simples e sem causar medo.';
            image2.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaEwwndOmBWxWNn6VcSDXaTgqUCzr9yxo1lG4yU1z8rz_kMU5YgvF8yt9boekr_X-zdPJbmlUlfxYKqkgVzP1-icWzwbkSeXc4Zy3CWpnIBduc6gzmPgcjzPjhFR-3uvPRGWefzasy8F4/s1600/d6.gif';
            description2.textContent = 'Ofereça um pequeno prêmio após a consulta.';
            break;
        case 2:
            image1.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisCXnC134TOQtkJumv0VBBBUoZkvMqxXD_YP0vOHSGSgZFI48T4gkmQv7pNahWDRcxCqxWbfhj7qkMZqZWTjyZVJd872oLYHmgvR79lYhKQVoKQmRAUXz2FU0mIRwSPXssroxjqgW9tU8/s1600/d5.gif';
            description1.textContent = 'Ensine sobre a prevenção de cáries de forma divertida.';
            image2.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMJP4rV3-Efpo-u0RHjVOl_6xOCeUv7pphXH8pkSFtyfheSiOWTI-DXj0us5naQwQ9TrLWBWmKggJU_OzBIbVlKBtYrKDCTqUxWB-jZahB-ErQUXi2xDvURAv4p47tnWHI2YmPJ6R47JQ/s1600/d81.gif';
            description2.textContent = 'Crie hábitos saudáveis desde cedo.';
            break;
        case 3:
            image1.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQb6dKVuabwrWbRmkTrTsxJ-4MsNs1w3yH1A2KuqqhyJlZBKlcrwFAlE_MdjwLghOkQ4qmx0a8-Hn1ELfQlXeW_Bxr74VByZCzSxS_TzplBGv_PGTXSc_7UnxlFXlKQ5VOf4cMv4ImKKp4/s320/d7.gif';
            description1.textContent = 'Garanta visitas regulares ao dentista.';
            image2.src = 'https://example.com/video6.gif';
            description2.textContent = 'Implemente práticas alimentares saudáveis.';
            break;
    }
}

