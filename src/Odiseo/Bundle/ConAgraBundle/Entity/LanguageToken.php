<?php

namespace Odiseo\Bundle\ConAgraBundle\Entity;
class LanguageToken {

	private $id;

	private $token;

	public function getId() {
		return $this->id;
	}

	public function setId($id) {
		$this->id = $id;
	}

	public function getToken() {
		return $this->token;
	}

	public function setToken($token) {
		$this->token = $token;
	}
}