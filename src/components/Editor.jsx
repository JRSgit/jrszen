import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

function Editors() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey='jta05t8nsfxvmpa3fw90h5rxyqq94lu3s5eszmvnh4rgh6py'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          selector: 'textarea#file-picker',
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | undo redo code ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'link image media insertfile removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          automatic_uploads: true,
          file_picker_types: 'image',
          images_upload_credentials: true,

        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}

export default Editors


