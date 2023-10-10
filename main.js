function openTab(e) {
	var tabContent = document.getElementsByClassName('tab-content');
	for (var i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}
	var tablinks = document.getElementsByClassName('tablinks');
	for (var i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}
	document.getElementById(e.currentTarget.dataset.id).style.display = 'block';

	if (!document.getElementById(e.currentTarget.dataset.id).hasChildNodes()) {
		if (e.currentTarget.dataset.url) {
			var iframe = document.createElement('iframe');
			iframe.src = e.currentTarget.dataset.url + '?rm=minimal';
			iframe.width = '100%';
			iframe.height = '100%';
			iframe.frameBorder = 0;
			document.getElementById(e.currentTarget.dataset.id).append(iframe);
		} else {
			var iframe = document.createElement('iframe');
			iframe.src = e.currentTarget.dataset.reportWeekUrl + '?rm=minimal';
			iframe.width = '50%';
			iframe.height = '100%';
			iframe.frameBorder = 0;
			document.getElementById(e.currentTarget.dataset.id).append(iframe);

			if (e.currentTarget.dataset.teacherReview !== 'undefined') {
				var iframe2 = document.createElement('iframe');
				iframe2.src = e.currentTarget.dataset.teacherReview + '?rm=minimal';
				iframe2.width = '50%';
				iframe2.height = '100%';
				iframe2.frameBorder = 0;
				document.getElementById(e.currentTarget.dataset.id).append(iframe2);
			}
		}
	}

	e.currentTarget.className += ' active';
}
