import React, { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SingleCase = ({ caseChanger, caseName, copied }) => {
    const { isCopied, setCopied } = copied;

    const resultText = caseChanger();

    useEffect(() => {
        setCopied(false)
    }, [resultText])

    return (
        <div className="singleCase">

            <div className="caseResult" >
                <span className="targetText">{resultText}</span>
            </div>

            <div className="caseOptions">
                <div className="caseName">
                    {caseName}
                </div>

                {resultText && isCopied &&
                    <div className="caseCopied">
                        Copid ✅
                    </div>}

                {resultText && !isCopied &&
                    <div className="caseCopy">
                        <CopyToClipboard text={resultText} onCopy={() => { setCopied(!isCopied) }}>
                            <span>Copy</span>
                        </CopyToClipboard>
                    </div>}

            </div>
        </div >
    )
}

export default SingleCase;