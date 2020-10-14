import React from 'react';

function Palestrantes(){

    function modal(modalId){
        const modal = document.getElementById(modalId);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalId || e.target.className === 'fechar'){
                modal.classList.remove('mostrar');
            }
        })
    }

    return(
        <>
            <h1 style={{
                display:"felx",
                marginTop: "30px",
                textAlign: "center"
            }}>Palestrantes</h1>
            
            <div className="palestrantes-container">
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1599873212_9d727926-0ee3-4238-a15d-6fcd257699e9.png" alt="foto do palestrante"></img>
                    <h3>Alice Nascimento</h3>
                    <p>Vitória, ES</p>
                    <button onClick={() => modal('item-0-modal')}>Ver mais</button>
                </div>
                <div id="item-0-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1599873212_9d727926-0ee3-4238-a15d-6fcd257699e9.png" alt="foto do palestrante"></img>
                            <h3>Alice Nascimento</h3>
                            <p>Vitória, ES</p>
                        </div>
                        <div className="modal-body">
                            Mestre em Música pela UFRJ – Universidade Federal do Rio de Janeiro com habilitação em Regência/Performance. Bacharel em Piano pela FAMES – Faculdade de Música do Espírito Santo e formação em Canto Lírico na mesma instituição. Presidente e Diretora Artística do Instituto Todos os Cantos, instituição sem fins econômicos. Fundadora do Algazarra Coral – com três turmas: Primeira Infância, Infantil e Juvenil e da Orquestra de Mulheres do Espírito Santo. Como especialista do Terceiro Setor é conselheira da FUNDAES – Federação do Terceiro Setor do Espírito Santo, integra o CONCAV – Conselho da Criança e do Adolescente de Vitória/ES e vem realizando vários projetos aprovados em Lei de Incentivo Fiscal Federal, Estadual e Municipal entre outros.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1599873441_6dfd2f81-ece4-4842-b05b-f3955e0ddeac.png" alt="foto do palestrante"></img>
                    <h3>Ana Leonor Pereira</h3>
                    <p>Lisboa, PRT</p>
                    <button onClick={() => modal('item-1-modal')}>Ver mais</button>
                </div>
                <div id="item-1-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1599873441_6dfd2f81-ece4-4842-b05b-f3955e0ddeac.png" alt="foto do palestrante"></img>
                            <h3>Ana Leonor Pereira</h3>
                            <p>Lisboa, PRT</p>
                        </div>
                        <div className="modal-body">
                        Mestre em Ciências da Fala pela ESSA/Universidade Católica, licenciada e profissionalizada em Canto pelo Conservatório de Haia e em Filosofia pela Universidade de Lisboa. É bacharel em Canto pela ESML. Formadora creditada pelo CCPFC. Tem vários artigos científicos publicados e discos editados. Fundou o Teatro de Ópera Infantil do qual é diretora artística. Foi-lhe atribuído o Título de Especialista em Música. Lecciona nos mestrados em EVM no ISEIT do Instituto Piaget de Almada e nos Conservatórios de Música de Lisboa e de Mafra sendo, deste, Diretora Pedagógica.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049353_3230af9c-9204-4cc8-90ff-a7ce191b7db0.png" alt="foto do palestrante"></img>
                    <h3>Ana Lúcia Gaborim</h3>
                    <p>Campo Grande, MS</p>
                    <button onClick={() => modal('item-2-modal')}>Ver mais</button>
                </div>
                <div id="item-2-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049353_3230af9c-9204-4cc8-90ff-a7ce191b7db0.png" alt="foto do palestrante"></img>
                            <h3>Ana Lúcia Gaborim</h3>
                            <p>Campo Grande, MS</p>
                        </div>
                        <div className="modal-body">
                        Natural de São Paulo (SP), Bacharela em Música - Composição e Regência, Mestre em Música pela UNESP e Doutora em Artes pela USP. Sua tese, sobre a Regência Coral Infantojuvenil, recebeu menção honrosa no Prêmio Tese Destaque USP 2016. É professora do curso de Música da UFMS nas áreas de Regência, Canto Coral e Técnica Vocal; coordenadora dos projetos de extensão “PCIU – Projeto coral infantojuvenil da UFMS” e “CanteMus”, regente do Coro Feminino e do Coral da UnAPI (3a idade). Tem publicados diversos artigos acadêmicos e é membro da Academia Feminina de Letras e Artes de Mato Grosso do Sul.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049373_27a448f9-b061-47a5-902e-d7ea5373f443.png" alt="foto do palestrante"></img>
                    <h3>Ángela Burgoa</h3>
                    <p>Mendonza, ARG</p>
                    <button onClick={() => modal('item-3-modal')}>Ver mais</button>
                </div>
                <div id="item-3-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049373_27a448f9-b061-47a5-902e-d7ea5373f443.png" alt="foto do palestrante"></img>
                            <h3>Ángela Burgoa</h3>
                            <p>Mendonza, ARG</p>
                        </div>
                        <div className="modal-body">
                        Graduada em Regência Coral - Faculdade de Artes e Desenho - na Universidade Nacional de Cuyo. Tem realizado cursos de aperfeiçoamento com reconhecidos professores e participado de Congressos, Fóruns e Simpósios. É diretora do coro infantojuvenil UNCUYO, junto ao qual desenvolve uma intensa atividade de extensão artística educativa. Tem atuado como regente convidada e jurada em diversos eventos, e realizado cursos e conferências (sobre coro infantojuvenil e outros temas). É sócia-fundadora da ADICORA - Asociación de Directores de Coro de la República Argentina.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049788_8b473257-70c8-455e-95be-87e5598aa0ae.jpg" alt="foto do palestrante"></img>
                    <h3>Bianca Almeida</h3>
                    <p>Goiânia, GO</p>
                    <button onClick={() => modal('item-4-modal')}>Ver mais</button>
                </div>
                <div id="item-4-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049788_8b473257-70c8-455e-95be-87e5598aa0ae.jpg" alt="foto do palestrante"></img>
                            <h3>Bianca Almeida</h3>
                            <p>Goiânia, GO</p>
                        </div>
                        <div className="modal-body">
                        Graduou-se em Música pela Universidade Federal de Goiás, pós-graduada na área de Regência Coral no Programa de Especialização em Performance Musical, pela EMAC/UFG. Mestre em MÚSICA na área de Regência Coral pela UFG. Atualmente tem realizado diversos Cursos, formações e eventos ligados à inclusão e, como pesquisadora do Centro de Estudo e Pesquisa Ciranda da Arte, SEDUC/GO, atua em projetos de Música e inclusão, tendo duas frentes: escolas de ensinos especiais, como professora do Centro de Apoio Pedagógico para Deficientes Visuais, CAP – CEBRAV, onde vem atuando na musicalização e coral. E em escola de ensino regular, em projetos de Música e inclusão para alunos autistas, down, paralisia cerebral, TOD, dentre outras deficiências.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049644_3fcd8b07-ac24-4438-9baa-ffd213cc47b7.png" alt="foto do palestrante"></img>
                    <h3>Cezar Elbert</h3>
                    <p>São Paulo, SP</p>
                    <button onClick={() => modal('item-5-modal')}>Ver mais</button>
                </div>
                <div id="item-5-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049644_3fcd8b07-ac24-4438-9baa-ffd213cc47b7.png" alt="foto do palestrante"></img>
                            <h3>Cezar Elbert</h3>
                            <p>São Paulo, SP</p>
                        </div>
                        <div className="modal-body">
                        Compositor, arranjador e produtor musical vem há 30 anos atuando com produções e arranjos para Coros Graduados, TV, Rádio, CDs e Vídeos. Estudou com o Maestro Mário Záccaro na Escola Municipal de Música de São Paulo. Cursou Publicidade e Propaganda na Faculdade Cásper Líbero. Cezar escreveu mais de 500 canções. É compositor de hinos oficiais e comemorativos de colégios e empresas. Escreveu diversos musicais temáticos: Natureza, Natal, Páscoa, Cidadania. Idealizou e tem se dedicado ao projeto sociocultural "Music for Hope-Brasil", com atuação no meio publicitário e empreendimentos artísticos em colégios e Instituições de Ensino e Cultura em São Paulo e no Brasil.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049870_2f92ef8a-cca4-43e5-b11b-b2555c5c9649.png" alt="foto do palestrante"></img>
                    <h3>Cláudia Cunha</h3>
                    <p>Natal, RN</p>
                    <button onClick={() => modal('item-6-modal')}>Ver mais</button>
                </div>
                <div id="item-6-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049870_2f92ef8a-cca4-43e5-b11b-b2555c5c9649.png" alt="foto do palestrante"></img>
                            <h3>Cláudia Cunha</h3>
                            <p>Natal, RN</p>
                        </div>
                        <div className="modal-body">
                        Graduou-se em Música com habilitação em Canto pela Universidade Federal de Pernambuco (UFPE). Realizou estudos complementares em Pedagogia Musical na área de Canto na Martin-Luther-Universität, Halle-Wittenberg/Alemanha e teve aulas particulares de Técnica de Alexander com o professor Helmut Rennschuh em Leipzig. Como docente, ministra as disciplinas Canto, Prática de Conjunto e História e Literatura Vocais nos cursos Técnico e Bacharelado, da Escola de Música da UFRN. Atualmente rege e faz a preparação do coral ViVendo o Canto, grupo que faz parte das atividades de educação inclusiva para pessoas com deficiência visual da EMUFRN.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049919_a8f32b13-c42f-457d-98c5-1b098c828707.png" alt="foto do palestrante"></img>
                    <h3>Cláudia Pacheco</h3>
                    <p>São Paulo, SP</p>
                    <button onClick={() => modal('item-7-modal')}>Ver mais</button>
                </div>
                <div id="item-7-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600049919_a8f32b13-c42f-457d-98c5-1b098c828707.png" alt="foto do palestrante"></img>
                            <h3>Cláudia Pacheco</h3>
                            <p>São Paulo, SP</p>
                        </div>
                        <div className="modal-body">
                        Fga. Me. Claudia Pacheco, fonoaudióloga (CRFa 2R 1275) e preparadora vocal. Graduada em Fonoaudiologia pela Pontifícia Universidade Católica de São Paulo (PUC-SP). Especialista em Voz pelo CRFa e mestre em Distúrbios da Comunicação Humana pela UNIFES/SP. Docente do curso de Especialização em Voz – CECEV e da Pós-Graduação em Vocal Coach do CEV (Centro de Estudos da Voz). Formação nos métodos para voz cantada, Sommatic Voice System e The Estill Voice Model. Certificada em Coaching Profissional pelo NeuroLeadership® Institute – metodologia Results Coaching System.
                        Especialista em Neurociência pela Faculdade de Medicina da Santa Casa de São Paulo (FMSC/SP).
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050217_76f14df3-9446-4bb8-943e-e46eef33b68b.png" alt="foto do palestrante"></img>
                    <h3>Eliane Fonseca</h3>
                    <p>Belém, PA</p>
                    <button onClick={() => modal('item-8-modal')}>Ver mais</button>
                </div>
                <div id="item-8-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050217_76f14df3-9446-4bb8-943e-e46eef33b68b.png" alt="foto do palestrante"></img>
                            <h3>Eliane Fonseca</h3>
                            <p>Belém, PA</p>
                        </div>
                        <div className="modal-body">
                        Professora Eliane Fonseca é formada em Licenciatura Plena em Educação Artística com habilitação em música pela Universidade do estado do Pará. Pós graduada em Ensino das Artes na Educação Básica (UNINTER) e Mestre em Artes pelo Instituto de Ciências da Arte (ICA/UFPA). É membro sócio da SAA(Suzuki Associacion of The Americas) e estudante do método Suzuki de Educação Musical no Centro Suzuki São Paulo - EAD). É professora efetiva de Musicalização do Instituto Estadual Carlos Gomes em Belém-Pará e integra o grupo de instrutores musicais do Projeto Vale Música Belém onde atua como Regente do Coro Infantojuvenil Vale Música desde 2017.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050516_8e5d1c33-1e63-4755-9057-3cdbb32d5480.png" alt="foto do palestrante"></img>
                    <h3>Elisa Dekaney</h3>
                    <p>Syracuse, EUA</p>
                    <button onClick={() => modal('item-9-modal')}>Ver mais</button>
                </div>
                <div id="item-9-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050516_8e5d1c33-1e63-4755-9057-3cdbb32d5480.png" alt="foto do palestrante"></img>
                            <h3>Elisa Dekaney</h3>
                            <p>Syracuse, EUA</p>
                        </div>
                        <div className="modal-body">
                        Dr. ª Elisa Macedo Dekaney é professora titular de educação musical e Pró-reitora para Pós-graduação, Pesquisa, e Internacionalização do College of Visual and Performing Arts da Syracuse University em New York. É formada em comunicação social pela UFF e em música sacra pelo Seminário Teológico Bastista do Sul do Brasil. Fez o mestrado em regência na
    University of Missouri-Kansas City e o doutorado (PhD) em educação musical na Florida State University. Pesquisadora prolífica com publicações em várias revistas e livros acadêmicos, já regeu centenas de festivais corais em vários países.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050666_48ac9163-80e7-4e7f-a21f-0f9e7e69a3ba.png" alt="foto do palestrante"></img>
                    <h3>Glória Caputo</h3>
                    <p>Natal, RN</p>
                    <button onClick={() => modal('item-10-modal')}>Ver mais</button>
                </div>
                <div id="item-10-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050666_48ac9163-80e7-4e7f-a21f-0f9e7e69a3ba.png" alt="foto do palestrante"></img>
                            <h3>Glória Caputo</h3>
                            <p>Natal, RN</p>
                        </div>
                        <div className="modal-body">
                        Nasceu em Belém-Pará, cidade onde iniciou e concluiu seus estudos de piano com tributo de honra na classe da Professora Dóris Azevedo. Aperfeiçoou-se com Pierre Klose (Universidade da Bahia) e, nos EUA, com Peter Yasbeck, da Universidade da Califórnia (Santa Barbara) e Eduardo Delgado, (Los Angeles). Ocupou diversos cargos na área educacional e musical, entre os quais os de Diretora do Instituto Carlos Gomes (1983 a 1986); Vice-Presidente da ABEMUS; Superintendente da Fundação Carlos Gomes (1986 a 1996), Presidente do Conselho do CCBEU (1994 a 1998) e Presidente da Fundação Amazônica de Música (1996 a 2019), além de coordenar os Projetos Vale Música e de Interiorização Musical nas cidades de Santa Cruz do Arari e Jenipapo, na Ilha do Marajó-PA.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050752_b3a89ddf-ab39-4822-8238-efe27f74b9be.png" alt="foto do palestrante"></img>
                    <h3>Juliana Melleiro</h3>
                    <p>Campinas, SP</p>
                    <button onClick={() => modal('item-11-modal')}>Ver mais</button>
                </div>
                <div id="item-11-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050752_b3a89ddf-ab39-4822-8238-efe27f74b9be.png" alt="foto do palestrante"></img>
                            <h3>Juliana Melleiro</h3>
                            <p>Campinas, SP</p>
                        </div>
                        <div className="modal-body">
                        Doutora e mestra em Música pela UNICAMP e licenciada em Educação Musical pela UNESP. Atualmente, rege o Grupo KIDS do Canarinhos da Terra da UNICAMP e coordena coros escolares desta instituição. É docente do Colégio Lumen Verbi e da Pós-graduação em Educação Musical EAD da Unyleya. Também regeu coros do Instituto Baccarelli; cantou no Coro Contemporâneo de Campinas, Coral Jovem do Estado de São Paulo e o Coro Juvenil da OSESP; e aperfeiçoou-se em festivais nos Estados Unidos, Chile e Argentina. Atualmente é Professora Temporária de Canto e Regência da Universidade Estadual do Rio Grande do Norte - UERN.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050928_5e6883f2-016b-41e2-b883-6941fb95abb3.png" alt="foto do palestrante"></img>
                    <h3>Lúcia Passos</h3>
                    <p>São Leopoldo, RS</p>
                    <button onClick={() => modal('item-12-modal')}>Ver mais</button>
                </div>
                <div id="item-12-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600050928_5e6883f2-016b-41e2-b883-6941fb95abb3.png" alt="foto do palestrante"></img>
                            <h3>Lúcia Passos</h3>
                            <p>São Leopoldo, RS</p>
                        </div>
                        <div className="modal-body">
                        Mineira radicada há mais de 40 anos em São Leopoldo, RS, é cantora e professora de técnica vocal e é considerada uma das maiores referências nacionais da técnica vocal para coros. Seu trabalho se destaca no cenário brasileiro, atuando junto aos coros e regentes do RS e do Brasil e como professora de técnica vocal na Oficina de Música de Curitiba. Por meio do Projeto Villa Lobos, da FUNARTE, realizou oficinas em todo o Brasil, colaborando na formação de coros e preparadores vocais. Foi coordenadora cultural na Unisinos, realizando projetos e diversas séries de concertos e shows. Atualmente é sócia e diretora artística da PRESTO – Produções e Promoções Artísticas, em São Leopoldo, RS. Dedicando-se à orientação de cantores, atores e professores no Espaço Livre de Música, e à preparação vocal do Madrigal Presto.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051121_e5d8f7e6-3a1e-495a-8ebf-e7bfa1a6e177.png" alt="foto do palestrante"></img>
                    <h3>Lucy Schimiti</h3>
                    <p>Londrina, PR</p>
                    <button onClick={() => modal('item-13-modal')}>Ver mais</button>
                </div>
                <div id="item-13-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051121_e5d8f7e6-3a1e-495a-8ebf-e7bfa1a6e177.png" alt="foto do palestrante"></img>
                            <h3>Lucy Schimiti</h3>
                            <p>Londrina, PR</p>
                        </div>
                        <div className="modal-body">
                        Bacharel em Música pela Faculdade de Música “Mãe de Deus” e Mestre pela Unesp. Foi professora da Universidade Estadual de Londrina por 33 anos, atuando no Departamento de Música e Teatro, além de ter sido professora em Cursos de Especialização. Foi Regente Titular dos Coros Adulto, Juvenil e Infantil da Instituição. Desde 2002, atua como Assessora Artística do Projeto “Educação Musical através do Canto Coral – um canto em cada canto”, desenvolvido em escolas da Rede Municipal de Ensino da cidade de Londrina, através do PROMIC, com convênios com as Secretarias de Educação e de Cultura do Município, envolvendo anualmente um número aproximado de 700 crianças na atividade de canto em grupo.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051152_98318f37-6afd-4096-8afa-20b0bfce59d9.png" alt="foto do palestrante"></img>
                    <h3>Luís Gustavo Laureano</h3>
                    <p>Votorantim, SP</p>
                    <button onClick={() => modal('item-14-modal')}>Ver mais</button>
                </div>
                <div id="item-14-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051152_98318f37-6afd-4096-8afa-20b0bfce59d9.png" alt="foto do palestrante"></img>
                            <h3>Luís Gustavo Laureano</h3>
                            <p>Votorantim, SP</p>
                        </div>
                        <div className="modal-body">
                        Regente Coral, Cantor Lírico e Pianista com formação na Escola de Música do Theatro Municipal de São Paulo, Conservatório de Tatuí e ETEC de Artes.
    Foi o primeiro coordenador da Escola de Música de Votorantim “Maestro Nilson Lombardi”, onde foi professor de Canto Lírico e instituiu o Coro Jovem. Foi Professor de Canto Lírico e Regente do Madrigal FUNDEC no Instituto Municipal de Música de Sorocaba – FUNDEC, do Coral do PROAME – Programa de Amparo ao Menor de Votorantim e Grupo Referência do Projeto Guri – Regional Sorocaba, com o qual produziu e dirigiu o Pocket Musical “West Side Story”. É Regente do Coral do Projeto Espaço Feliz – Lar Donato Flores há quase 10 anos, Madrigal Cantabile e Coral da APEVO.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051195_bc916baf-6b34-4581-8835-7e9ccb557677.png" alt="foto do palestrante"></img>
                    <h3>Mara Campos</h3>
                    <p>São Paulo, SP</p>
                    <button onClick={() => modal('item-15-modal')}>Ver mais</button>
                </div>
                <div id="item-15-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051195_bc916baf-6b34-4581-8835-7e9ccb557677.png" alt="foto do palestrante"></img>
                            <h3>Mara Campos</h3>
                            <p>São Paulo, SP</p>
                        </div>
                        <div className="modal-body">
                        Bacharel em Regência e pós-graduada pela Faculdade de Música Cantareira, desde 1978 atua como regente coral, formando e dirigindo inúmeros conjuntos como os Corais Infantil e Juvenil da Escola Municipal de Música de São Paulo e os Coros Infantis do Projeto Coro Cênico desenvolvido pelo Grupo “Canto em Movimento” junto ao SESI/SP, entre outros.
    Atua como diretora musical e regente da série “Alimentando com Música” desde 2016 - espetáculo artístico-pedagógico destinado ao público infantil numa das ações culturais promovidas pelo Instituto Curitiba de Arte e Cultura - ICAC.
    É professora da Faculdade de Música Cantareira/SP e desde 2015 é regente titular e diretora musical do Coro da Camerata Antiqua de Curitiba.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051319_d4a8b6aa-6c0f-44d7-91eb-218cfb570fc1.png" alt="foto do palestrante"></img>
                    <h3>María Guinand</h3>
                    <p>Caracas, VEN</p>
                    <button onClick={() => modal('item-16-modal')}>Ver mais</button>
                </div>
                <div id="item-16-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051319_d4a8b6aa-6c0f-44d7-91eb-218cfb570fc1.png" alt="foto do palestrante"></img>
                            <h3>María Guinand</h3>
                            <p>Caracas, VEN</p>
                        </div>
                        <div className="modal-body">
                        Regente coral, professora e líder de projetos corais nacionais e internacionais, especializou-se em música coral latino-americana dos séculos XX e XXI. Com o Cantoría Alberto Grau (1976-2009), recebeu seis prêmios nas competições de Neuchate e Arezzo (1989) e três medalhas de ouro com o Orfeón Universitario Simón Bolívar (1976-2008) na Olimpíada Coral de Linz (2000). Foi Diretora Artística do programa ‘Música para Crecer’ do Banco de Desenvolvimento da América Latina (2003-2017). Atualmente é a Diretora Artística da Fundación Schola Cantorum de Venezuela, dirige a Schola Cantorum de Venezuela e a Coral Fundación Empresas Polar. No momento é Artista Residente na Florida International University, na área da Música Coral.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051712_ecbe77bc-163f-4283-ba90-2fc2ae6b5e55.png" alt="foto do palestrante"></img>
                    <h3>Maria José Chevitarese</h3>
                    <p>Rio de Janeiro, RJ</p>
                    <button onClick={() => modal('item-17-modal')}>Ver mais</button>
                </div>
                <div id="item-17-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051712_ecbe77bc-163f-4283-ba90-2fc2ae6b5e55.png" alt="foto do palestrante"></img>
                            <h3>Maria José Chevitarese</h3>
                            <p>Rio de Janeiro, RJ</p>
                        </div>
                        <div className="modal-body">
                        Graduada em Regência pela Universidade Federal do Rio de Janeiro - UFRJ, mestre em Música Brasileira pela UNIRIO e doutora em Psicossociologia de Comunidades pela UFRJ. É professora titular de canto coral e dirige os coros Infantil da UFRJ (1989) e Brasil Ensemble-UFRJ (1999). Criou o projeto A escola vai à ópera voltado para o público infantil, tendo produzido dez óperas.  Na área administrativa atuou como Vice-decana e Decana do Centro de Letras e Artes, Pró-reitora de Extensão, Diretora Artística da Escola de Música, e Diretora da Escola de Música da UFRJ. Atualmente coordena a área coral do projeto Um Novo Olhar, parceria UFRJ/FUNARTE.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051663_35ed1ef2-a9c2-42dd-9d6e-306aa89226fb.png" alt="foto do palestrante"></img>
                    <h3>Marino Galvão</h3>
                    <p>Curitiba, PR</p>
                    <button onClick={() => modal('item-18-modal')}>Ver mais</button>
                </div>
                <div id="item-18-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051663_35ed1ef2-a9c2-42dd-9d6e-306aa89226fb.png" alt="foto do palestrante"></img>
                            <h3>Marino Galvão</h3>
                            <p>Curitiba, PR</p>
                        </div>
                        <div className="modal-body">
                        Formado pela Universidade Federal do Paraná em Comunicação Social com habilitação em Relações Públicas. Especializado em Commedia dell’arte pela Scuola Internazionale del’attore Comico de Reggio Emília – Itália. Mestre em Gestão do Espetáculo pela SDA Bocconi de Milão, em parceria com o Piccolo Teatro de Milão e Accademia Teatro Scala de Milão. É ator, diretor de produção e diretor teatral. Desde 2015 é diretor do Instituto Curitiba de Arte e Cultura (ICAC), Organização Social que mantém contrato com a Prefeitura Municipal de Curitiba e responde pela gestão da Camerata Antiqua de Curitiba, Oficina de Música de Curitiba, Conservatório de MPB, Teatro do Paiol, Capela Santa Maria, Solar dos Guimarães, Programa MusicaR, além de dezenas de outros grupos e projetos nas áreas da música. 
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051637_41be6b88-37e4-40c8-97ab-1cad8599b0c0.png" alt="foto do palestrante"></img>
                    <h3>Marisa Fonterrada</h3>
                    <p>São Paulo, SP</p>
                    <button onClick={() => modal('item-19-modal')}>Ver mais</button>
                </div>
                <div id="item-19-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051637_41be6b88-37e4-40c8-97ab-1cad8599b0c0.png" alt="foto do palestrante"></img>
                            <h3>Marisa Fonterrada</h3>
                            <p>São Paulo, SP</p>
                        </div>
                        <div className="modal-body">
                        Graduada em Música (Bacharelado) pela Universidade São Judas Tadeu (1977), Mestre em Psicologia da Educação (1991) e doutora em Antropologia pela PUC-São Paulo (1996); é Professora Livre-Docente em Técnicas de Musicalização pelo Instituto de Artes da UNESP, onde coordenou e regeu o projeto de extensão CantorIA – coro infantojuvenil. Coordenou também a ETEC de Artes do Centro de Educação Tecnológica "Paula Souza", da Secretaria de Estado do Desenvolvimento de São Paulo. Atualmente é professora aposentada da UNESP, trabalhando como voluntária no Programa de Pós-graduação em Música - Mestrado e Doutorado. 
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051615_64c29bbd-ec92-49c9-8e6b-4098e8445923.png" alt="foto do palestrante"></img>
                    <h3>Oleide Lelis</h3>
                    <p>Londrina, PR</p>
                    <button onClick={() => modal('item-20-modal')}>Ver mais</button>
                </div>
                <div id="item-20-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600051615_64c29bbd-ec92-49c9-8e6b-4098e8445923.png" alt="foto do palestrante"></img>
                            <h3>Oleide Lelis</h3>
                            <p>Londrina, PR</p>
                        </div>
                        <div className="modal-body">
                        Licenciada em Pedagogia pelo Cesulon-Londrina, formou-se em piano pelo Conservatório Carlos Gomes em Londrina (PR) especialização em Coral infantil e juvenil pela Escola Belas Artes de Curitiba. Criou e coordenou o Projeto canto na escola e o Festival de Corais de Ibiporã. Foi regente de coros infantis da região. Participou de Cursos, Congressos e Simpósios referentes a área de Regência coral em diversos estados e também nos Estados Unidos e Dinamarca. Desde 2002 atua como Coordenadora Pedagógica do Projeto “Educação Musical através do Canto Coral – um canto em cada canto” desenvolvido em 17 escolas da Rede Municipal de Ensino da cidade de Londrina através do PROMIC, com convênios com as Secretárias de Educação e de Cultura do Município, envolvendo aproximadamente 700 crianças por ano.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053313_757a659b-3c6f-4044-8112-97ffccd69d9d.png" alt="foto do palestrante"></img>
                    <h3>Paulo Paraguassú</h3>
                    <p>Vitória, ES</p>
                    <button onClick={() => modal('item-21-modal')}>Ver mais</button>
                </div>
                <div id="item-21-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053313_757a659b-3c6f-4044-8112-97ffccd69d9d.png" alt="foto do palestrante"></img>
                            <h3>Paulo Paraguassú</h3>
                            <p>Vitória, ES</p>
                        </div>
                        <div className="modal-body">
                        Graduado em Canto Lírico e Licenciatura em Música, com habilitação em Educação Musical, pela Faculdade de Música do Espírito Santo - FAMES. É especializado em regência pelo ISSED/FAVED - MG, em Educação Musical pela FABRA-Serra/ES e Psicopedagogia Institucional pelo CESAP/ Vitória-ES. Possui Mestrado em Educação pela Saint Alcuin of York / Chile. É professor dos cursos de Licenciatura em Música e de extensão da FAMES e dirige o coral Curumins. Dirigiu e preparou Pocket´s de musicais, entre eles: O Fantasma da Ópera (Andrew L. Webber), no Teatro Carlos Gomes, Mama Mia (Benny Andersson), no Teatro Glória, A Disney é Aqui (Disney Stúdios). Como pianista acompanhador atuou em Lisboa, Madrid, Paris e Londres em 1997. 
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053294_3f4e87bf-829f-49d8-b04d-b3b75e629e9d.png" alt="foto do palestrante"></img>
                    <h3>Regina Kinjo</h3>
                    <p>São Paulo, SP</p>
                    <button onClick={() => modal('item-22-modal')}>Ver mais</button>
                </div>
                <div id="item-22-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053294_3f4e87bf-829f-49d8-b04d-b3b75e629e9d.png" alt="foto do palestrante"></img>
                            <h3>Regina Kinjo</h3>
                            <p>São Paulo, SP</p>
                        </div>
                        <div className="modal-body">
                        Regente coral, atualmente professora do Coral Infanto Juvenil na Escola Municipal de Música de São Paulo, Coral do Colégio Oshiman, Regente do Coral Infantil no projeto AMIS e grupo vocal Madrigal “Sempre en Canto”. REGINA KINJO é natural de São Paulo, graduada em Artes. Trabalhou em projetos e instituições diversas, como ULM, Projeto Guri, Instituto Baccarelli, Coral do Porto dos Anjos em Santos e Coral Vozes da Infância na Paraíba. Entre as gravações, destacam-se: Ouviram do Ipiranga, Herdeiros do Futuro, Hino Nacional Brasileiro, Rei Arthur e os Cavaleiros da Távola Redonda.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053248_18a87bfa-216c-40ba-a68f-8a540cf96f8c.png" alt="foto do palestrante"></img>
                    <h3>Silmara Drezza</h3>
                    <p>Jundiaí, SP</p>
                    <button onClick={() => modal('item-23-modal')}>Ver mais</button>
                </div>
                <div id="item-23-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053248_18a87bfa-216c-40ba-a68f-8a540cf96f8c.png" alt="foto do palestrante"></img>
                            <h3>Silmara Drezza</h3>
                            <p>Jundiaí, SP</p>
                        </div>
                        <div className="modal-body">
                        Formada em Licenciatura Plena em Música pela Faculdade de Música Carlos Gomes-São Paulo e em piano pelo Instituto Gomes Cardim-Campinas. Participou da formação para professores em Pedagogia Musical na Ecole de Musique Martenot e Chalons Sur Marne , França, Creating Artristy Butler University (EUA) com Maestro Henry Leck, Primer taller de Foramtion de Directores Corales- Caracas (Venezuela) com Maria Guinand e Alberto Grau, dentre outros workshops com renomados maestros no Brasil. Desde 2002 é Regente do “Coral Cênico infanto-juvenil das Oficinas Culturais de Campo Limpo Paulista” e do Coral Heliópolis do Instituto Baccarelli, onde também atua como coordenadora pedagógica da área coral.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600134606_be3c0130-03b7-4f50-b8b4-943019392917.png" alt="foto do palestrante"></img>
                    <h3>Sven Kristersson</h3>
                    <p>Malmö, SUE</p>
                    <button onClick={() => modal('item-24-modal')}>Ver mais</button>
                </div>
                <div id="item-24-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600134606_be3c0130-03b7-4f50-b8b4-943019392917.png" alt="foto do palestrante"></img>
                            <h3>Sven Kristersson</h3>
                            <p>Malmö, SUE</p>
                        </div>
                        <div className="modal-body">
                        PhD em performance musical, compositor, pesquisador, intérprete e professor de canto na Academia de Música de Malmö, da da Universidade de Lund, Suécia. Atuou interpretando canções históricas e poéticas. Desenvolve também, como compositor, trabalhos inspirados na tradição literária e em estilos tradicionais brasileiros e franceses. Em 2019, o projeto A escola vai à ópera, da Escola de Música da UFRJ, estreou o musical de sua autoria, com texto baseado no conto do dinamarquês Hans Christian Andersen, A Nova Roupa do Imperador.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053190_8f66aed8-dc22-45da-bd9d-98fcfed50e9c.png" alt="foto do palestrante"></img>
                    <h3>Tim Rescala</h3>
                    <p>Rio de Janeiro, RJ</p>
                    <button onClick={() => modal('item-25-modal')}>Ver mais</button>
                </div>
                <div id="item-25-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053190_8f66aed8-dc22-45da-bd9d-98fcfed50e9c.png" alt="foto do palestrante"></img>
                            <h3>Tim Rescala</h3>
                            <p>Rio de Janeiro, RJ</p>
                        </div>
                        <div className="modal-body">
                        Estudou na Escola de Música da UFRJ e Escola de Música Villa-Lobos. Com Han-Joachim Koellreutter estudou composição, contraponto e arranjo. Licenciou-se em música pela UNIRIO em 1983. Compositor e diretor musical de várias peças de teatro, recebeu os prêmios Mambembe, Shell, Coca-Cola e APTR. Autor de óperas, musicais, música de câmera e eletroacústica. Sua peça Pianíssimo foi o primeiro texto infantil apresentado na Comédie-Française. Escreve e apresenta o programa Blim-blem-blom na rádio MEC-FM desde 2011. Sua ópera O perigo da arte, que estreou em 2013 em Buenos Aires, teve sua estreia brasileira em novembro, na Sala Cecília Meireles, RJ. Trabalha agora em duas grandes produções para o Parque Beto Carrero World.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053168_e61115fa-c4f7-4b24-83fb-e55ef8dee21b.png" alt="foto do palestrante"></img>
                    <h3>Yara Campos</h3>
                    <p>São Paulo, SP</p>
                    <button onClick={() => modal('item-26-modal')}>Ver mais</button>
                </div>
                <div id="item-26-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1600053168_e61115fa-c4f7-4b24-83fb-e55ef8dee21b.png" alt="foto do palestrante"></img>
                            <h3>Yara Campos</h3>
                            <p>São Paulo, SP</p>
                        </div>
                        <div className="modal-body">
                        Formou-se em piano, comunicações, com mestrado em educação. Frequentou festivais na Alemanha, Portugal, Itália e EUA. Prestou serviços ao Instituto Nacional de Música FUNARTE (Projeto Villa Lobos), Secretarias da Cultura de SP, PR, MG, órgãos artístico-culturais do país (Federações de Coros) e universidades (USP, PUC-Campinas, Mackenzie), em práticas relacionadas ao canto coral. Tem atuado junto a grupos infanto-juvenis, coros de empresas, universitários e adultos, com ênfase na capacitação de regentes e elaboração de repertórios para coros iniciantes.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1601472682_44d9fc4d-0122-406f-8edb-36268e757d2d.jpeg" alt="foto do palestrante"></img>
                    <h3>Yuli Martinez</h3>
                    <p>Salvador, BA</p>
                    <button onClick={() => modal('item-27-modal')}>Ver mais</button>
                </div>
                <div id="item-27-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1601472682_44d9fc4d-0122-406f-8edb-36268e757d2d.jpeg" alt="foto do palestrante"></img>
                            <h3>Yuli Martinez</h3>
                            <p>Salvador, BA</p>
                        </div>
                        <div className="modal-body">
                        Mestre em Educação Musical pela UFBA, com foco na Prática Coral, iniciou seus estudos musicais no Conservatório de Tolima. No Conservatório de Música da Universidade Nacional de Colômbia estudou trompa com Gerney Diaz. Atuou como regente do Coral Juvenil no Instituto Técnico Industrial Dom Bosco e como professora de Trompa em programas sociais na Colômbia. Chegou ao programa NEOJIBA, na Bahia, em agosto de 2011 e até dezembro de 2015 participou como Trompista da Orquestra Juvenil Dois de Julho e do Quinteto de Sopros. Desde 2012 atua como regente coral do projeto. Atualmente coordena a área de corais infantojuvenis do Programa, e na formação de novos maestros regentes.
                        </div>
                    </div>
                </div>
                <div className="palestrante-card">
                    <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1601472705_70dd1269-ffda-46e4-8ee9-a38b5d1308b6.png" alt="foto do palestrante"></img>
                    <h3>Grupo Vozes Especiais</h3>
                    <p>Campo Grande, MS</p>
                    <button onClick={() => modal('item-28-modal')}>Ver mais</button>
                </div>
                <div id="item-28-modal" className="modal-container">
                    <div className="modal">
                        <button className="fechar">x</button>
                        <div className="modal-header">
                            <img src="https://gi-upload-production.s3.amazonaws.com/uploads/hotsite/v2/speakers_or_bands_photo/thumb_1601472705_70dd1269-ffda-46e4-8ee9-a38b5d1308b6.png" alt="foto do palestrante"></img>
                            <h3>Grupo Vozes Especiais</h3>
                            <p>Campo Grande, MS</p>
                        </div>
                        <div className="modal-body">
                        O Grupo Vozes Especiais iniciou as ações em meados de 2006, com a professora de música e psicopedagoga Sandra Helena, o regente Marcos Alves, a terapeuta ocupacional Etna Gutierres e Silvana Alves como voz guia.
    As ações realizadas pelo grupo são, entre outras, o apoio técnico operacional a coralistas com deficiências, propiciando a estes a prática dos saberes aprendidos e a integração com outros coros de Mato Grosso do Sul. O trabalho desenvolvido possibilita que os coralistas tenham sua autoestima valorizada e oportuniza a acessibilidade necessária para que estes tornem-se protagonistas de ações culturais.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Palestrantes;