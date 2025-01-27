import React, { useState } from "react";
import { 
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStrikeThrough,
    BtnUnderline,
    BtnUndo,
    Editor,
    EditorProvider,
    Separator,
    Toolbar
  } from 'react-simple-wysiwyg';
const RichTextEditor = () => {
    const [value, setValue] = useState('simple text');
  return (
    <div>
      <EditorProvider>
        <Editor value={value} onChange={(e)=>setValue(e.target.value)}>
        <Toolbar>
          
          <Separator />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
         
         
          
          
        </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
