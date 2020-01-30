import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Command from '@ckeditor/ckeditor5-core/src/command';

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

class InsertImageCommand extends Command {
	execute() {}
}

export default class InsertImage extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'InsertImage';
	}

	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'insertImage', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Insert image',
				icon: imageIcon,
				tooltip: true
			} );

			editor.commands.add( 'insertImage', new InsertImageCommand( editor ) );

			// // Callback executed once the image is clicked.
			view.on( 'execute', () => {
				editor.execute( 'insertImage' );
			} );

			return view;
		} );
	}
}
