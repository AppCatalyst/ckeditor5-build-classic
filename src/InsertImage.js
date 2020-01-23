import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export class InsertImage extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'insertImage', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Insert image',
				icon: imageIcon,
				tooltip: true
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => {
				const event = new Event( 'insertImage' );
				editor.dispatchEvent( event );
			} );

			return view;
		} );
	}
}
