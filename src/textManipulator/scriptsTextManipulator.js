import { initialState } from "./state";

// Faz a contagem de linha
export function lineCount(e)
{
    const text = e.target.value;
    const lines = text.split(/\r\n|\r|\n/).length;
    return lines;
}

// Faz a contagem de palavras digitadas
export function wordCount(e)
{
    const text = e.target.value;

    // quebra ao localizar o enter ou o espaço
    const words = text.split(/\n\s|\n|\s/g); 

    // remove os elementos vazios de dentro do array
    const filtered = words.filter((e) => {
        return e !== '';
    }).length;
    
    return filtered;
}

// Altera no estado todo o texto digitado para minúsculo
export function toLowerCase() { this.setState({ text: this.state.text.toLowerCase()}) }

// Altera no estado todo o texto digitado para maíusculo
export function toUpperCase() { this.setState({ text: this.state.text.toUpperCase()})}

// Transforma as iniciais das palavras para maiúsculo, após um ponto, exclamação ou interrogação
export function toSentenceCase()
{
    const text = this.state.text;

    // Após ponto, exclamação ou interrogação ele irá colocar o caractere em maiúsulo.
    const textConverted = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    
    this.setState({ text: textConverted });
}

// Transforma as palavras que não sejam preposições, para as iniciais maiúsculas
export function toTitleCase()
{
    const lowCasePrepositionWordsBR = ["da", "do", "das", "dos", "a", "o", "e", "de", "os", "as", "um",
                                "um", "para", "em", "ele", "ela", "eles", "elas", "este", "esta", "no",
                                "na", "isto", "esse", "isso", "com", "à", "até", "sem", "aos", "ou", "seja",
                                "é", "ao"];
    const text = this.state.text.toLowerCase();
    
    const textConverted = text.split(/\r?\n/).map(word => (
        word.split(' ').map((w, i) => (
            w = (lowCasePrepositionWordsBR.includes(w)) ? 
                        ((i === 0) ? w.charAt(0).toUpperCase() + w.slice(1) : w.toLowerCase()) 
                    : w.charAt(0).toUpperCase() + w.slice(1)
            
            )).join(' ')
    )).join('\n');
    
    this.setState({ text: textConverted });
}


// transforma todas as iniciais das palavras para maiúsculo
export function toCapitalizeCase() 
{ 
    const text = this.state.text;

    /**
     * Quebra o texto através do regex (\n - quebra de linha)
     * faz um mapeamento das palavras no array e quebra o texto nos 'espaços'
     * transforma o primeiro caractere para maiúsculo e o resto para minúsculo
     * adiciona os 'espaços' entre os arrays, e por fim, adiciona as quebras de linhas.
     */
    const textConverted = text.split(/\r?\n/).map(word => (
        word.split(' ').map(w => (
            w.charAt(0).toUpperCase() + w.slice(1)
            )).join(' ')
    )).join('\n');

    this.setState({ text: textConverted });
}

// Copia o texto digitado
export function textCopyToClipboard(e)
{
    const text = this.state.text;
    
    navigator.clipboard.writeText(text).then(() => {
        this.setState({ alertMsg: {visible: true, title: 'Copiar', text:'Texto copiado para a prancheta!'}})
    });
}

// função para fazer download do texto
export function textDownload() {
    const text = this.state.text;
    const filename = 'text';
    
    new Promise((resolve, reject) => {
        var file = new Blob([text], {type: "text/plain;charset=utf-8"});

        // IE10+
        if (window.navigator.msSaveOrOpenBlob) 
            window.navigator.msSaveOrOpenBlob(file, filename);
        else // Outros navegadores
        { 
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  
            }, 0); 
        }
    }).then(this.setState({ alertMsg: {visible: true, title: 'Baixar', text:'Baixando arquivo.'}}));
}

// Reseta o estado
export function clear() { this.setState(initialState) }
