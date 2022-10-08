const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync')

console.log('Bem vindo ao bot de criptomoedas')

async function bot(){
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const moedaNormal = readlineSync.question('Informe a moeda que vai usar para comprar: ') || 'dolar';
  const criptoMoeda = readlineSync.question('Informe a criptomoeda da sua preferencia: ') || 'bitcoin';
  await page.goto(`https://www.google.com/search?q=o+valor+de+um+${moedaNormal}+para+${criptoMoeda}&sxsrf=ALiCzsaXJjQLDAcp34i7J86hd5EgjG-0MA%3A1665242166946&ei=NpRBY86iOZCG1sQPgPGCwAE&ved=0ahUKEwjOlc2-9tD6AhUQg5UCHYC4ABgQ4dUDCA4&uact=5&oq=o+valor+de+um+${moedaNormal}+para+${criptoMoeda}&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyCAghEB4QFhAdOgcIIxDqAhAnOgQIIxAnOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6EQguEIAEELEDEMcBENEDENQCOggILhCxAxCDAToFCAAQgAQ6CAgAELEDEIMBOgQIABBDOgoIABCxAxCDARBDOgQILhBDOgcIABDJAxBDOgUILhCABDoECAAQAzoICAAQgAQQsQM6CAguEIAEENQCOgsIABBDEEYQggIYAToGCAAQHhAWOgwIABCABBBGEIICGAE6CAgAEB4QFhAKOgkIABAeEMkDEBZKBAhBGABKBAhGGAFQhBZYlTtgxz1oAXAAeACAAYACiAHZIJIBBjAuMjkuMpgBAKABAbABCsABAdoBBggBEAEYEw&sclient=gws-wiz-serp`);
  const result = await page.evaluate(() => {
    return document.querySelector('.cilsF.a61j6').value;
  });
  console.log(`O valor de 1 ${moedaNormal} em ${criptoMoeda} é de ${result}`)
  await browser.close();
};

bot();