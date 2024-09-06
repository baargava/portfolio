import React, { useEffect, useState } from 'react';

export const DecoderEffect = ({ name }) => {
    const [decodedText, setDecodedText] = useState('');

    const glyphs = [
        'ア', 'イ', 'ウ', 'エ', 'オ',
        'カ', 'キ', 'ク', 'ケ', 'コ',
        'サ', 'シ', 'ス', 'セ', 'ソ',
        'タ', 'チ', 'ツ', 'テ', 'ト',
        'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
        'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
        'マ', 'ミ', 'ム', 'メ', 'モ',
        'ヤ', 'ユ', 'ヨ', 'ー',
        'ラ', 'リ', 'ル', 'レ', 'ロ',
        'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
        'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
        'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
        'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
        'バ', 'ビ', 'ブ', 'ベ', 'ボ',
        'パ', 'ピ', 'プ', 'ペ', 'ポ',
    ];

    useEffect(() => {
        const length = name.length;
        let displayText = Array(length).fill('');
        let revealedCharacters = 0;

        const interval = setInterval(() => {
            // Randomize unrevealed characters using the Katakana glyphs
            for (let i = revealedCharacters; i < length; i++) {
                displayText[i] = glyphs[Math.floor(Math.random() * glyphs.length)];
            }

            // Reveal one more character of the actual name
            if (revealedCharacters < length) {
                displayText[revealedCharacters] = name[revealedCharacters];
                revealedCharacters += 1;
            }

            setDecodedText(displayText.join(''));

            // Stop when all characters are revealed
            if (revealedCharacters === length) {
                clearInterval(interval);
            }
        }, 100); // Adjust the speed of the effect here

        return () => {
            clearInterval(interval); // Cleanup interval on unmount
        };
    }, [name]);

    return (
        <div style={{ fontFamily: 'monospace', fontSize: '70px' }}>
            I'm {decodedText}
        </div>
    );
};