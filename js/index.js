// #==================================#
// #      toolbox-collapsible         #
// #==================================#

var coll = document.getElementsByClassName("toolbox-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("toolbox-hit");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
        /*if (content.style.height === "auto") {
            content.style.height = "0";
        } else {
            content.style.height = "auto";
        }*/
    });
}

let toolboxDiv = document.getElementById("notepad-toolbox1");
let toolboxDownloadBtn = document.getElementById("toolbox-download-btn");
let codeWindow = document.getElementById("lua-codewindow")
let homeLuaActions = document.getElementById("home-lua-actions")
let fakeProgressBar = document.getElementById("fake-progress-bar")
let downloadBtn = toolboxDownloadBtn;
let landingpage = document.getElementById("home-landing");
let idepage = document.getElementById("home-ide");

function toggleHome(state) {
    // toggle home/landing page elemts on/off
    if (toolboxDiv == null) {
        return;
    }

    if (state) {
        // swap ide with landing page
        idepage.style.display = "none";
        landingpage.style.display = "flex";

        toolboxDiv.style.filter = "Saturate(0.1)";
        if (window.innerWidth > 600) {
            idepage.style.maxHeight = "100%";
            toolboxDiv.style.display = "none";
        }

        idepage.style.maxHeight = "100%";
        toolboxDownloadBtn.style.display = "none";
        //codeWindow.contentEditable = false;
        codeWindow.style.filter = "blur(0)";
    } else {
        if (window.innerWidth <= 600)
            idepage.style.maxHeight = "70%";

        // swap landing page with ide
        idepage.style.display = "flex";
        landingpage.style.display = "none";

        toolboxDiv.style.filter = "none";

        //toolboxDiv.style.display = "block";
        toolboxDiv.style.display = "flex";

        toolboxDownloadBtn.style.display = "block";
        //codeWindow.contentEditable = true;
        codeWindow.style.filter = "blur(0)";
    }
}
toggleHome(true) // make sure home is set at start?

// load on playground ONLY?
window.onload = function() {
    // #==================================#
    // #            UI Button             #
    // #==================================#

    let isObfuscating = false

    function startObfuscation() {
        if (isObfuscating)
            return false

        codeWindow.style.filter = "blur(3px)";
        isObfuscating = true;
        return true
    }

    // Quick check to not show HOME page
    let url = new URLSearchParams(window.location.search)
    let val = url.get("session")
    if (val !== null) {
        toggleHome(false);
        //startObfuscation(); // blur it?
    }

    function stopObfuscation() {
        if (!isObfuscating)
            return false

        consolecallback("Obfuscation finished!")
        codeWindow.style.filter = "blur(0px)";
        isObfuscating = false;
        return true
    }

    let gtagz = "adsbygoogle";
    let luafile = document.getElementById("lua-file")
    if (luafile != null) {
        // NOTE: only load on index?
        // TODO: improve
        downloadBtn.addEventListener("click", function(e) {
            var a = document.createElement('a');
            var blob = new Blob([document.getElementById("lua-codewindow").innerText], {
                "type": "text/plain"
            });
            a.href = window.URL.createObjectURL(blob);
            a.download = "obf_" + luaEngine.getSessionId() + ".lua";
            a.click();
        });

        document.getElementById("lua-pre-0").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("pre-0", 1);
        })
        document.getElementById("lua-pre-1").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("pre-1", 1);
        })
        document.getElementById("lua-pre-2").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("pre-2", 2);
        })
        document.getElementById("lua-pre-3").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("pre-3", 3);
        })
        document.getElementById("lua-pre-4").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("pre-4", 4);
        })
        document.getElementById("lua-pre-5").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("pre-5", 5);
        })
        document.getElementById("lua-pre-6").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("pre-6", 6);
        })
        document.getElementById("lua-cleanup").addEventListener("click", function(e) {
            if (startObfuscation())
                luaEngine.cleanup(frontcallback)
        })
        var _test = document.getElementById("lua-cleanup3")
        var _testA = document.getElementById("lua-args")
        var _testB = document.getElementById("lua-cffv2")
        var _testC = document.getElementById("lua-packer-nn")
        var _testD = document.getElementById("lua-packer-tinkr")
        var _testE = document.getElementById("lua-chopped")
        var _testF = document.getElementById("lua-cachedstrings")
        var _testG = document.getElementById("lua-callret")
        var _testH = document.getElementById("lua-check")

        if (_test) {
            _test.addEventListener("click", function(e) {
                if (startObfuscation())
                    luaEngine.cleanup(frontcallback)
            })
            _testA.addEventListener("click", function(e) {
                if (startObfuscation())
                    doEngineAction("args", 50);
            })
            _testB.addEventListener("click", function(e) {
                if (startObfuscation())
                    doEngineAction("cffv2", 50);
            })
            _testC.addEventListener("click", function(e) {
                if (startObfuscation())
                    doEngineAction("packer-nn", 50);
            })
            _testD.addEventListener("click", function(e) {
                if (startObfuscation())
                    doEngineAction("packer-tinkr", 50);
            })
            _testE.addEventListener("click", function(e) {
                if (startObfuscation())
                    doEngineAction("chopped", 50);
            })
            _testF.addEventListener("click", function(e) {
                if (startObfuscation())
                    doEngineAction("cachedstrings", 100);
            })
            _testG.addEventListener("click", function(e) {
                if (startObfuscation())
                    doEngineAction("callret", 100);
            })
            _testH.addEventListener("click", function(e) {
                if (startObfuscation())
                    doEngineAction("check", 100);
            })
        }
        document.getElementById("lua-junkif").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("junkif", 50);
        })
        document.getElementById("lua-reverseif").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("reverseif", 65);
        })
        document.getElementById("lua-cffv1").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("cffv1", 50);
        })
        document.getElementById("lua-encfdec").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("encfdec", 100);
        })
        document.getElementById("lua-swizzle").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("swizzle", 100);
        })
        document.getElementById("lua-glookup").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("glookup", 100);
        })
        document.getElementById("lua-makesus").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("makesus", 69);
        })
        document.getElementById("lua-cffv1-exp").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("cffv1", 50);
        })
        document.getElementById("lua-literals").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("literals", 50);
        })
        document.getElementById("lua-mbav1").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("MBAv1", 75);
        })
        document.getElementById("lua-variables").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("variables", 50);
        })
        document.getElementById("lua-minify").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("minify", 100);
        })
        document.getElementById("lua-minify2").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("minify", 100);
        })
        document.getElementById("lua-luamina-push").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("luamina-push", 100);
        })
        document.getElementById("lua-luamina-pull").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("luamina-pull", 100);
        })
        document.getElementById("lua-beautify").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("beautify", 100);
        })
        document.getElementById("lua-beautify2").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("beautify", 100);
        })
        document.getElementById("lua-beautify3").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("beautify", 100);
        })
        document.getElementById("lua-copytoclipboard").addEventListener("click", function(e) {
            //
            let codewindow = document.getElementById("lua-codewindow");
            navigator.clipboard.writeText(codewindow.innerText);
        })
        document.getElementById("lua-evaluate").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("evaluate", 100);
        })
        document.getElementById("lua-strings").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("strings", 100);
        })
        document.getElementById("lua-tableindirection").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("tableindirection", 100);
        })
        document.getElementById("lua-bit32").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("bit32", 69);
        })
        document.getElementById("lua-transpile51").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("transpile51", 69);
        })
        document.getElementById("lua-const").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("const", 69);
        })
        document.getElementById("lua-rmPLH").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("rmPLH", 69);
        })
        document.getElementById("lua-demo_vm").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("demo_vm", 100);
        })
        document.getElementById("lua-demo_vm-exp").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("demo_vm", 100);
        })
        document.getElementById("lua-wpacker").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("wpacker", 100);
        })
        //document.getElementById("lua-virtualize").addEventListener("click", function (e) {
        //    doEngineAction("virtualize", 100);
        //})
        //document.getElementById("lua-devirtualize").addEventListener("click", function (e) {
        //    doEngineAction("devirtualize", 100);
        //})
        //document.getElementById("lua-emulate").addEventListener("click", function (e) {
        //    doEngineAction("emulate", 0);
        //})
        document.getElementById("lua-undo").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("undo", 0);
        })
        document.getElementById("lua-undoAll").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("undoAll", 0);
        })
        document.getElementById("lua-reset").addEventListener("click", function(e) {
            window.location.href = "/"
        })
        document.getElementById("lua-reset2").addEventListener("click", function(e) {
            window.location.href = "/";
        })

        // experimental
        document.getElementById("lua-ssa").addEventListener("click", function(e) {
            if (startObfuscation())
                doEngineAction("ssa", 0);
        })

        // landing page buttons
        document.getElementById("btn-demo").addEventListener("click", function(e) {
            // TODO: err handling?
            let token = turnstile.getResponse()
            if (token == undefined || token == "") {
                return;
            }

            // TODO: subsribe to the `expired-callback` ??

            /*if (turnstile.isExpired()) {
                alert("Expired, pls reload page?")
            }*/

            if (!isObfuscating) {
                luaEngine.setTurnstileToken(token);
                luaEngine.init(frontcallback, flags, true); // empty to get demo
            }
        })
        document.getElementById("btn-uploadfile").addEventListener("click", function(e) {
            if (!isObfuscating) {
                document.getElementById("lua-file").click();
            }
        })

        // on file uploaded

        luafile.addEventListener("change", function(e) {
            let token = turnstile.getResponse()
            if (token == undefined || token == "") {
                return;
            }
            if (!isObfuscating && this.files.length > 0) {
                // take first file
                codeWindow.style.filter = "blur(7px)";
                homeLuaActions.style.filter = "blur(7px)";
                fakeProgressBar.style.display = "block";
                isObfuscating = true; // block UI buttons

                luaEngine.setTurnstileToken(token);
                this.files[0].text().then(x => luaEngine.init(frontcallback, flags, true, x))
            }
        })
    }

    let frontcallback = function(lastEvent) {
        //var startOff = getCaretIndex(codeWindow)

        //codeWindow.style.filter = "blur(0px)";
        stopObfuscation();

        let test = document.getElementById("lua-codewindow");

        //        if (!luaEngine.parseScript($(".lang-lua"), lastEvent))
        if (!luaEngine.parseScript(test, lastEvent))
            return;

        // TODO: find a better way to count lines lol!
        /*
        let testLines = document.getElementById("notepad-lines-ul");
        if (testLines != null && test != null) {
            testLines.innerHTML = "";
            var count = 1;
            //let lineCount = test.innerText.split('\n').length;
            for (var i = 0; i <= test.innerText.length;  i++) {
                if (test.innerText[i] == '\n' || i == test.innerText.length-1) {
                    let txt = document.createTextNode(count++);
                    var li = document.createElement("li");
                    li.appendChild(txt);
                    testLines.appendChild(li);
                    if (count >= 2048)
                        break;
                }
            }
        }*/

        // NOTE: skip range as we no longer want editable content?
        /*
        var newRange = document.createRange()
        // quick fix, iterate over nodes
        var index = 0
        var targetChild = 0
        var nextChild = codeWindow.firstChild;
        for (var i = 0; i < codeWindow.children.length; i++) {
            var child = codeWindow.children[i]
            if (index + child.innerText.length >= startOff) {
                targetChild = i
                break;
            }
            index += child.innerText.length
        }
        newRange.setStart(codeWindow.childNodes[targetChild].firstChild, startOff - index)
        newRange.collapse(true)
        var sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(newRange)
        */

        // TODO: check size?
        let lconsole = document.getElementById("lua-console");
        if (lconsole != null && window.innerWidth > 600) {
            lconsole.style.display = "block";
        }

        // toogle UI elements
        toggleHome(luaEngine.getSessionId() == null)
    };

    let consolecallback = function(msg, color = "var(--primary)") {
        // TODO?
        let consoleul = document.getElementById("lua-console-ul");
        if (consoleul != null) {
            // Don't judge me for timestamp, judge ChatGPT
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

            let li = document.createElement("li");
            li.style.color = color;
            li.style.whiteSpace = "pre";

            // Define the regex pattern
            const regex = /E:(\d+):(\d+):(\d+)/;

            // Execute the regex on the text
            const matches = msg.match(regex);

            if (matches) {
                for (let i = 0; i < matches.length; i += 4) {
                    const lineStart = matches[i + 1]; // Line start
                    const charStart = matches[i + 2]; // char start
                    const charEnd = matches[i + 3]; // char end
                    const chars = charEnd - charStart;

                    let markerH = document.getElementById("err-market-h");
                    let markerH2 = document.getElementById("err-market-h2");
                    let markerV = document.getElementById("err-market-v");

                    markerV.style.width = "21px";
                    //markerV.style.width = ""; // 21px + char * charStart ?
                    markerV.style.height = "100%";
                    markerV.style.left = "-21px";
                    markerV.style.top = "0";
                    markerV.style.opacity = "1";

                    markerH.style.height = "20px"
                    markerH.style.left = "0";
                    markerH.style.width = "100%";

                    let lineheight = 18;
                    if (window.innerWidth <= 600)
                        lineheight = 16;

                    let linewidth = 18;
                    if (window.innerWidth <= 600)
                        linewidth = 16;

                    markerH.style.top = `${((Number(lineStart) - 1) * lineheight)}px`;
                    markerH.style.opacity = "0.69";

                    // TODO: figure out the end of char on line!?
                    /*
                    markerH2.style.top = `${((Number(lineStart) - 1) * lineheight)-2}px`;
                    markerH2.style.opacity = "0.69";
                    markerH2.style.height = "24px";
                    markerH2.style.left = `${((Number(lineStart) - 1) * lineheight) - 2}px`;
                    */

                    console.log(`${charStart} - ${chars}`);
                }

                // seperate new line
                if (!msg.startsWith("E:"))
                    msg += "\n";

                li.appendChild(document.createTextNode(`[${hours}:${minutes}:${seconds}.${milliseconds}]: ${msg}`));
            } else {
                li.appendChild(document.createTextNode(`[${hours}:${minutes}:${seconds}.${milliseconds}]: ${msg}`));
            }
            consoleul.prepend(li)
        }
    }

    luaEngine.setConsoleCallback(consolecallback)

    consolecallback("Initialized Console!");


    //
    // Some stuff for ctrl+a only in 'lua-codewindow' div
    //
    let luaCodeWindow = document.getElementById('lua-codewindow')

    luaCodeWindow.addEventListener('keydown', function(event) {
        // Check if the pressed key is 'A' and the Ctrl key is also pressed (for Windows/Linux)
        // or the Command key is pressed (for macOS)
        if ((event.key === 'a' || event.key === 'A') && (event.ctrlKey || event.metaKey)) {
            // Prevent the default behavior (selecting all text)
            event.preventDefault();

            // Programmatically select the text in the contenteditable div
            selectText('lua-codewindow');
        }
    });

    let initialized = false; // startup & re-init after user content changes
    let isHidden = false
    luaCodeWindow.addEventListener("input", function(event) {
        initialized = false
        if (isHidden) {
            return
        }
        let bannerText = document.getElementById("lua-codewindow-banner")
        bannerText.style.display = "none";
        isHidden = true;
    })

    function selectText(containerId) {
        // Get the container element
        var container = document.getElementById(containerId);

        // Create a Range object
        var range = document.createRange();

        // Select the entire contents of the container
        range.selectNodeContents(container);

        // Create a Selection object
        var selection = window.getSelection();

        // Remove existing selections (if any)
        selection.removeAllRanges();

        // Add the new range to the selection
        selection.addRange(range);
    }


    // TODO: remove? (or auto upload?)
    //codeWindow.addEventListener("input", function (e) {
    //    luaEngine.updateScript(this.innerText, frontcallback)
    //});

    // TODO: remove?
    //codeWindow.addEventListener("click", function (e) {
    //    //toggleTooltip(e)
    //})

    let flags = document.getElementsByClassName(gtagz).length;

    // #==================================#
    // #        Init Lua Engine           #
    // #==================================#

    function doEngineAction(action, cmd) {
        // init or re-init for user modified content
        if (!initialized) {
            luaEngine.detachSession(); // force unset SessionID

            // TODO: verify its rdy?
            function _checkKeyAndUpdateIfPossible() {
                let token = turnstile.getResponse()
                if (token == undefined || token == "") {
                    setTimeout(_checkKeyAndUpdateIfPossible, 0)
                    return;
                }
                luaEngine.setTurnstileToken(token);
                luaEngine.init(null, flags, true, codeWindow.innerText)
            }
            _checkKeyAndUpdateIfPossible();

            // force set new?
            initialized = true;
            luaEngine.getInstances(updateTop)
        }
        consolecallback("Applying obfuscation '" + action + "'"); // + "(" + toString(cmd) + ")")
        luaEngine.obfuscate(action, cmd, frontcallback);
    }

    //luaEngine.setTurnstileToken(turnstile.getResponse());
    luaEngine.init(frontcallback, flags)
    initialized = true;

    function updateTop(sessions) {
        let landingpage = document.getElementById("home-landingpage")
        let targetDOM = document.getElementById("lua-sessions");
        let codewindow = document.getElementById("lua-codewindow");

        // discard existing?
        targetDOM.innerHTML = "";

        // main/home?
        let spanHome = document.createElement("span");
        spanHome.className = "top-tab-close";
        //spanHome.appendChild(document.createTextNode("x"));
        let txtHome = document.createTextNode("<< Home")
        let aHome = document.createElement("a");
        if (luaEngine.getSessionId() == null) {
            aHome.href = "#";
            aHome.style = "color: var(--primary); text-decoration: none; width: auto;";
            landingpage.style.display = "flex";
        } else {
            aHome.href = "/";
            aHome.style = "text-decoration: none;";
        }
        aHome.appendChild(txtHome)
        let liHome = document.createElement("li");
        liHome.className = "top-tab";
        liHome.appendChild(aHome);
        liHome.style = "width: auto;";
        liHome.appendChild(spanHome)
        targetDOM.appendChild(liHome);

        for (var i = 0; i < sessions.length; i++) {
            let spanNode = document.createElement("span");
            spanNode.className = "top-tab-close";
            spanNode.appendChild(document.createTextNode("x"));
            let txtNode = document.createTextNode(sessions[i])
            let aNode = document.createElement("a");
            if (luaEngine.getSessionId() == sessions[i]) {
                aNode.href = "#";
                aNode.style = "color: var(--primary); text-decoration: none; cursor: default!important;";
            } else {
                aNode.href = "./?session=" + sessions[i];
                aNode.style = "text-decoration: none;";
            }
            aNode.appendChild(txtNode)
            let liNode = document.createElement("li");
            liNode.className = "top-tab";
            liNode.appendChild(aNode);
            liNode.appendChild(spanNode);
            targetDOM.appendChild(liNode);
        }
        codewindow.style.filter = "blur(0)";
    }
    luaEngine.getInstances(updateTop)
};