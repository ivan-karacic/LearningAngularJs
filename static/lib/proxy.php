<?php
	// get all data from a url
	function getAll() {
		// store tenant number
		$tenant = '1000';
		// initialize curl
		$curl = curl_init();
		
		// set up curl options
		// set url
		curl_setopt($curl, CURLOPT_URL, 'http://testlab-1.qcoach.com:81/coach/api/v1/'.$tenant.$_GET['url']);
		// retrieve the response, do not display it
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		// set header to application/json, required by api
		curl_setopt($curl, CURLOPT_HTTPHEADER, Array("Content-Type:application/json"));
		
		// send request and save response
		$response = curl_exec($curl);
		// close request to clear some resources
		curl_close($curl);
		
		// return response
		return $response;
	}
	
	function getSingle() {
		// save tenant
		$tenant = '1000';
		// initialize curl
		$curl = curl_init();
		
		// set up curl options
		// set url
		curl_setopt($curl, CURLOPT_URL, 'http://testlab-1.qcoach.com:81/coach/api/v1/'.$tenant.$_GET['url'].$_GET['id']);
		// retrieve the response, do not display it
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		// set header to application/json, required by api
		curl_setopt($curl, CURLOPT_HTTPHEADER, Array("Content-Type:application/json"));
		
		// send request and save response
		$response = curl_exec($curl);
		// close request to clear some resources
		curl_close($curl);
		
		// return response
		return $response;
	}
	
	function update() {
		// save tenant
		$tenant = '1000';
		// parse data posted from client
		$data = file_get_contents("php://input");
		
		// initialize curl
		$curl = curl_init();
		
		// set up curl options
		// set url
		curl_setopt($curl, CURLOPT_URL, 'http://testlab-1.qcoach.com:81/coach/api/v1/'.$tenant.$_GET['url'].$_GET['id']);
		// retrieve the response, do not display it
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		// set header to application/json (required from api) and override method request
		curl_setopt($curl, CURLOPT_HTTPHEADER, Array("Content-Type:application/json", "X-HTTP-Method-Override: PUT"));
		// set PUT request using custom request
		curl_setopt($curl, CURLOPT_POST , true);
		// set data to send with request
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

		// send request and save response
		$response = curl_exec($curl);
		// close request to clear some resources
		curl_close($curl);
		
		// return response
		return $response;
	}
	
	echo $_GET['action']();
?>