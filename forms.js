// sistema_cadastro_clientes.js
const readline = require('readline');

// Estruturas de dados
const listaNomes = []; // Array para nomes (permite duplicatas)
const conjuntoEmails = new Set(); // Set para e-mails únicos
const mapaTelefones = new Map(); // Map para ID → Telefone

// Configuração do readline para entrada de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function iniciarCadastro() {
    console.log('=== SISTEMA DE CADASTRO DE CLIENTES ===\n');
    
    // Limpar estruturas para novo cadastro
    listaNomes.length = 0;
    conjuntoEmails.clear();
    mapaTelefones.clear();
    
    await cadastrarNomes();
    await cadastrarEmails();
    await cadastrarTelefones();
    
    exibirResultados();
    rl.close();
}

async function cadastrarNomes() {
    console.log('\n📝 CADASTRO DE NOMES (10 clientes)');
    console.log('================================');
    
    for (let i = 0; i < 10; i++) {
        let nomeValido = false;
        
        while (!nomeValido) {
            const nome = await questionAsync(`Digite o nome do cliente ${i + 1}/10: `);
            
            if (nome && nome.trim() !== '') {
                listaNomes.push(nome.trim());
                nomeValido = true;
            } else {
                console.log('❌ Por favor, digite um nome válido.');
            }
        }
    }
}

async function cadastrarEmails() {
    console.log('\n📧 CADASTRO DE E-MAILS (10 e-mails únicos)');
    console.log('========================================');
    
    for (let i = 0; i < 10; i++) {
        let emailValido = false;
        
        while (!emailValido) {
            const email = await questionAsync(`Digite o e-mail do cliente ${i + 1}/10: `);
            
            if (email && email.trim() !== '') {
                const emailFormatado = email.trim().toLowerCase();
                
                if (conjuntoEmails.has(emailFormatado)) {
                    console.log('❌ Este e-mail já foi cadastrado! Digite um e-mail diferente.');
                } else {
                    conjuntoEmails.add(emailFormatado);
                    emailValido = true;
                }
            } else {
                console.log('❌ Por favor, digite um e-mail válido.');
            }
        }
    }
}

async function cadastrarTelefones() {
    console.log('\n📞 CADASTRO DE TELEFONES (10 IDs únicos)');
    console.log('======================================');
    
    for (let i = 0; i < 10; i++) {
        let dadosValidos = false;
        
        while (!dadosValidos) {
            const id = await questionAsync(`Digite o ID do cliente ${i + 1}/10 (número): `);
            
            if (id && !isNaN(id) && id.trim() !== '') {
                const idNumero = parseInt(id.trim());
                
                if (mapaTelefones.has(idNumero)) {
                    console.log('❌ Este ID já foi cadastrado! Digite um ID diferente.');
                } else {
                    const telefone = await questionAsync(`Digite o telefone para o ID ${idNumero}: `);
                    
                    if (telefone && telefone.trim() !== '') {
                        mapaTelefones.set(idNumero, telefone.trim());
                        dadosValidos = true;
                    } else {
                        console.log('❌ Por favor, digite um telefone válido.');
                    }
                }
            } else {
                console.log('❌ Por favor, digite um ID válido (número).');
            }
        }
    }
}

function exibirResultados() {
    console.log('\n\n=== RESULTADOS DO CADASTRO ===');
    
    console.log('\n📝 Lista de Nomes Cadastrados:');
    console.log('----------------------------');
    listaNomes.forEach((nome, index) => {
        console.log(`${index + 1}. ${nome}`);
    });
    
    console.log('\n📧 Conjunto de E-mails Únicos:');
    console.log('----------------------------');
    let emailIndex = 1;
    conjuntoEmails.forEach(email => {
        console.log(`${emailIndex}. ${email}`);
        emailIndex++;
    });
    
    console.log('\n📞 Mapa de Telefones por ID:');
    console.log('--------------------------');
    mapaTelefones.forEach((telefone, id) => {
        console.log(`ID ${id}: ${telefone}`);
    });
    
    console.log('\n=== FIM DO CADASTRO ===');
}

// Iniciar o sistema
iniciarCadastro().catch(console.error);
