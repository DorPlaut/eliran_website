import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    [{ align: [] }], // add text align option
    // [
    //   {
    //     image: {
    //       icon: 'image',
    //       tooltip: 'Insert image URL',
    //       urlEnabled: true,
    //       urlPlaceholder: 'Enter image URL',
    //     },
    //   },
    // ],
    ['link', 'video'],
    // ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'video',
  'align',
];

export default function TextEditor({ content, setContent, ...props }) {
  const handleContentChange = (value) => {
    setContent(value);
  };
  return (
    <QuillNoSSRWrapper
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder={content}
      value={content}
      onChange={handleContentChange}
    />
  );
}
