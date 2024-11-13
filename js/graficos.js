if (document.getElementById("graficoVendas")) {
    const ctx1 = document.getElementById("graficoVendas").getContext("2d");

    // Dados para o gráfico de vendas
    const labelsVendas = [];
    const dataVendas = [];

    catalogo.forEach(livro => {
        labelsVendas.push(livro.titulo);
        dataVendas.push(livro.qtd_vendas); // Usando quantidade vendida
    });

    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: labelsVendas,
            datasets: [
                {
                    label: "Quantidade Vendida",
                    data: dataVendas,
                    backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF6384", "#36A2EB", "#FFCE56", "#FFCE46", "#Fa4E56", "#4B9CD3", "#FFD700", "#C71585", "#8A2BE2"],
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    const ctx2 = document.getElementById("graficoGeneros").getContext("2d");

    // Dados para o gráfico de gêneros
    const labelsGeneros = genero.map(g => g.genero);
    const dataGeneros = Array(genero.length).fill(0);
    catalogo.forEach(livro => {
        dataGeneros[livro.genero - 1] += livro.qtd_vendas;
    });

    new Chart(ctx2, {
        type: "pie",
        data: {
            labels: labelsGeneros,
            datasets: [
                {
                    label: "Quantidade Vendida por Gênero",
                    data: dataGeneros,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FFCE46",
                        "#Fa4E56",
                    ],
                },
            ],
        },
    });
}
