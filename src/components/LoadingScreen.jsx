// import { useEffect, useState } from "react";

// const LoadingScreen = ({ onComplete }) => {
//     const [text, setText] = useState("");
//     const fullText = "Welcome to my portfolio.";

//     useEffect(() => {
//         let index = 0;
//         const interval = setInterval(() => {
//             setText(fullText.substring(0, index));
//             index++;

//             if (index > fullText.length) {
//                 clearInterval(interval);

//                 setTimeout(() => {
//                     onComplete();
//                 }, 1000);
//             }
//         }, 100);

//         return () => clearInterval(interval);
//     }, [onComplete]);

//     return (
//         <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
//             <div className="mb-4 text-4xl font-mono font-bold">
//                 {text}
//                 <span className="animate-blink ml-1"> | </span>
//             </div>

//             <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
//                 <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#b82f6]  animate-loading-bar"></div>
//             </div>
//         </div>
//     );
// };

// export default LoadingScreen;


import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Welcome to my portfolio.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    // Typing ke waqt hi split karke color apply karenge
    const renderColoredText = (txt) => {
        const keyword = "portfolio";
        const keywordIndex = fullText.indexOf(keyword);

        // Agar abhi tak "portfolio" start hi nahi hua
        if (txt.length <= keywordIndex) {
            return txt;
        }

        // Agar portfolio start ho gaya, to split karke render karenge
        return (
            <>
                {/* "Welcome to my " part */}
                {txt.substring(0, keywordIndex)}

                {/* "portfolio" part green hoga jitna type hua */}
                <span className="text-green-500 ">
                    {txt.substring(
                        keywordIndex,
                        Math.min(keywordIndex + keyword.length, txt.length)
                    )}
                </span>

                {/* agar "portfolio" complete ho gaya aur uske baad ka text hai */}
                {txt.length > keywordIndex + keyword.length
                    ? txt.substring(keywordIndex + keyword.length)
                    : ""}
            </>
        );
    };

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {renderColoredText(text)}
                <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
