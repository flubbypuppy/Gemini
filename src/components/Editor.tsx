import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useRef } from "react";

export const Editor = () => {
  const editor = useRef();

  useEffect(() => {
    const startState = EditorState.create({
      doc: "Hello World",
      extensions: [keymap.of(defaultKeymap)],
    });

    const view = new EditorView({
      state: startState,
      extensions: [basicSetup, javascript()],
      parent: document.body,
    });
  });
  return <div></div>;
};
