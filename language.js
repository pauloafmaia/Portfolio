$(function () {
  $(".br").click(function () {
    $(".navbar").children().eq(0).text("Início");
    $(".navbar").children().eq(1).text("Sobre mim");
    $(".navbar").children().eq(2).text("Projetos");
    $(".navbar").children().eq(3).text("Habilidades");
    $(".navbar").children().eq(4).text("Contatos");
    $("#text-home").text("Desenvolvedor de Software");
    $("#text-sobre-1").text(
      "Desenvolvendo interfaces e APIs com Java, Javascript, React, HTML e CSS desde 2022"
    );
    $("#text-sobre-2").text(
      "Cursando Análise e Desenvolvimento de Sistemas na UNINASSAU"
    );
    $("#text-sobre-3").text(
      "Interesse em desenvolvimento Front-end e Back-end"
    );
    $("#text-sobre-4").text(
      "Buscando uma oportunidade para atuar como Desenvolvedor"
    );
    $("#text-projeto-1").text(
      "API criada para adição, edição e remoção de filmes da série de filmes de Star Wars. Realizada com Back-end em NodeJs e Front-end com ReactJs e Tailwind."
    );
    $("#text-projeto-2").text(
      "Site criado para casamento. Realizado com ReactJs e Tailwind"
    );
    $("#text-projeto-3").text(
      "Site criado para casamento. Realizado com HTML e CSS"
    );
    $(".language-selected").text("pt-BR");
    $(".language-selected").removeClass("change-en");
    $(".language-selected").removeClass("change-es");
    $(".language-selected").addClass("change-br");
  });
});

$(function () {
  $(".en").click(function () {
    $(".navbar").children().eq(0).text("Home");
    $(".navbar").children().eq(1).text("About me");
    $(".navbar").children().eq(2).text("Projects");
    $(".navbar").children().eq(3).text("Habilities");
    $(".navbar").children().eq(4).text("Contact");
    $("#text-home").text("Software Developer");
    $("#text-sobre-1").text(
      "Developing interfaces and APIs with Java, Javascript, React, HTML and CSS since 2022"
    );
    $("#text-sobre-2").text(
      "Studying Systems Analysis and Development at UNINASSAU"
    );
    $("#text-sobre-3").text("Interest in Front-end and Back-end development");
    $("#text-sobre-4").text(
      "Looking for an opportunity to work as a Developer"
    );
    $("#text-projeto-1").text(
      "API created for adding, editing and removing films from the Star Wars film series. Carried out with Back-end in NodeJs and Front-end with ReactJs and Tailwind."
    );
    $("#text-projeto-2").text(
      "Website created for wedding. Made with ReactJs and Tailwind"
    );
    $("#text-projeto-3").text(
      "Website created for wedding. Created with HTML and CSS"
    );
    $(".language-selected").text("en-US");
    $(".language-selected").removeClass("change-br");
    $(".language-selected").removeClass("change-es");
    $(".language-selected").addClass("change-en");
  });
});

$(function () {
  $(".es").click(function () {
    $(".navbar").children().eq(0).text("Comenzar");
    $(".navbar").children().eq(1).text("Acerca de mí");
    $(".navbar").children().eq(2).text("Proyectos");
    $(".navbar").children().eq(3).text("Habilidades");
    $(".navbar").children().eq(4).text("Contactos");
    $("#text-home").text("Desarrollador de Software");
    $("#text-sobre-1").text(
      "Developing interfaces and APIs with Java, Javascript, React, HTML and CSS since 2022"
    );
    $("#text-sobre-2").text(
      "Studying Systems Analysis and Development at UNINASSAU"
    );
    $("#text-sobre-3").text("Interest in Front-end and Back-end development");
    $("#text-sobre-4").text(
      "Looking for an opportunity to work as a Developer"
    );
    $("#text-projeto-1").text(
      "API created for adding, editing and removing films from the Star Wars film series. Carried out with Back-end in NodeJs and Front-end with ReactJs and Tailwind."
    );
    $("#text-projeto-2").text(
      "Website created for wedding. Made with ReactJs and Tailwind"
    );
    $("#text-projeto-3").text(
      "Website created for wedding. Created with HTML and CSS"
    );
    $(".language-selected").text("es-ES");
    $(".language-selected").removeClass("change-br");
    $(".language-selected").removeClass("change-en");
    $(".language-selected").addClass("change-es");
  });
});
