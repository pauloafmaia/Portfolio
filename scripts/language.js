$(function () {
  $(".br").click(function () {
    $(".navbar").children().eq(0).text("Início");
    $(".navbar").children().eq(1).text("Sobre mim");
    $(".navbar").children().eq(2).text("Projetos");
    $(".navbar").children().eq(3).text("Habilidades");
    $(".navbar").children().eq(4).text("Contatos");
    $("#text-home").text("Desenvolvedor de Software");
    $("#titulo-sobre").text("SOBRE MIM");
    $("#titulo-projetos").text("PROJETOS");
    $("#titulo-habilidades").text("HABILIDADES");
    $("#titulo-contatos").text("CONTATOS");
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
    $("#text-habilidades-1").text(
      "Desenvolvimento de sites responsivos e interativos utilizando tecnologias como ReactJs, com bibliotecas populares como Tailwind CSS, HTML e CSS"
    );
    $("#text-habilidades-2").text(
      "Desenvolvimento de APIs com as linguagens NodeJs e Java com Spring Boot."
    );
    $("#habilidades-2").text("Idiomas");
    $("#habilidades-1").text("Outras habilidades");
    $("#text-habilidades-4").text("Inglês avançado");
    $(".language-selected").text("Português");
    $(".language-selected").removeClass("change-en");
    $(".language-selected").addClass("change-br");
  });
});

$(function () {
  $(".en").click(function () {
    $(".navbar").children().eq(0).text("Home");
    $(".navbar").children().eq(1).text("About me");
    $(".navbar").children().eq(2).text("Projects");
    $(".navbar").children().eq(3).text("Skills");
    $(".navbar").children().eq(4).text("Contact");
    $("#text-home").text("Software Developer");
    $("#titulo-sobre").text("ABOUT ME");
    $("#titulo-projetos").text("PROJECTS");
    $("#titulo-habilidades").text("SKILLS");
    $("#titulo-contatos").text("CONTACTS");
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
    $("#text-habilidades-1").text(
      "Development of responsive and interactive websites using technologies such as ReactJs, with popular libraries such as Tailwind CSS, HTML and CSS"
    );
    $("#text-habilidades-2").text(
      "Development of APIs with NodeJs and Java with Spring boot"
    );
    $("#habilidades-2").text("Languages");
    $("#habilidades-1").text("Other skills");
    $("#text-habilidades-4").text("Advanced English");
    $(".language-selected").text("English");
    $(".language-selected").removeClass("change-br");
    $(".language-selected").addClass("change-en");
  });
});
