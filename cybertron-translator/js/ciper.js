// Dicionário de Cifras Cybertronianas baseado nas tabelas
const CYBERTRONIAN_ALPHABETS = {
    autobot: {
        'A': '2', 'B': '1', 'C': 'τ', 'D': 'ν', 'E': '└', 'F': 'IL', 'G': '⊇', 'H': '⊏', 'I': 'L', 'J': '4"', 'K': 'Γsq', 'L': '∫', 'M': '≀a',
        'N': 'U', 'O': '7', 'P': '//', 'Q': 'ヒ', 'R': '≂', 'S': '⎍', 'T': 'π', 'U': 'Π', 'V': '∩', 'W': '⍝', 'X': '=', 'Y': '┒', 'Z': 'ʃ'
    },
    decepticon: {
        'A': '୧', 'B': 'e', 'C': 'τ', 'D': 't', 'E': 'ɛ', 'F': '⩤', 'G': '∫', 'H': '1', 'I': '𝜏', 'J': 'G', 'K': '⑀', 'L': '⢺', 'M': '⍝',
        'N': '◩', 'O': '7', 'P': '┒', 'Q': 'ʃ', 'R': '⍝⍝', 'S': '𝜏', 'T': '⬎', 'U': '⎍', 'V': '', 'W': '∫', 'X': '⌠', 'Y': '⌋', 'Z': '⍺'
    },
    numbers: {
        '1': '▔', '2': 'ヘ', '3': 'シ', '4': 'ョ', '5': 'ヨ', '6': '⊃', '7': '╞', '8': '⊏', '9': '▔▔', '0': '⑺'
    }
};

// Dicionário de Jargões/Termos (Português -> Cybertroniano)
const LORE_DICTIONARY = {
    "amigo": "ALLIED-UNIT",
    "amigos": "ALLIED-UNITS",
    "inimigo": "DECEPTICON-THREAT",
    "inimigos": "DECEPTICON-THREATS",
    "casa": "BASE-SECTOR",
    "escola": "DATA-ACADEMY",
    "faculdade": "DATA-ACADEMY",
    "ir": "ROLL-OUT",
    "vamos": "ROLL-OUT",
    "segredo": "ENCRYPTED-SPARK",
    "sim": "ACKNOWLEDGED",
    "não": "OVERRIDE-DENIED",
    "nao": "OVERRIDE-DENIED",
    "perigo": "SYSTEM-FAILURE",
    "falar": "TRANSMIT-AUDIO",
    "ajuda": "REINFORCEMENTS-NEEDED"
};

/**
 * Função principal para codificar texto humano em Cybertroniano
 */
function encodeToCybertronian(text, faction = 'autobot') {
    let words = text.toLowerCase().split(' ');
    
    // 1. Substitui termos do cotidiano por jargões de Lore
    let translatedWords = words.map(word => {
        let cleanWord = word.replace(/[.,?!]/g, '');
        if (LORE_DICTIONARY[cleanWord]) {
            return LORE_DICTIONARY[cleanWord];
        }
        return word;
    });

    let processedText = translatedWords.join(' ').toUpperCase();
    let alphabet = CYBERTRONIAN_ALPHABETS[faction] || CYBERTRONIAN_ALPHABETS.autobot;
    let cipheredText = '';

    // 2. Converte caractere por caractere
    for (let char of processedText) {
        if (alphabet[char]) {
            cipheredText += alphabet[char];
        } else if (CYBERTRONIAN_ALPHABETS.numbers[char]) {
            cipheredText += CYBERTRONIAN_ALPHABETS.numbers[char];
        } else {
            cipheredText += char; // Mantém espaços e pontuações
        }
    }

    return `[TRANSMISSION_BURST // FACTION: ${faction.toUpperCase()}]\n${cipheredText}\n[END_PACKET]`;
}