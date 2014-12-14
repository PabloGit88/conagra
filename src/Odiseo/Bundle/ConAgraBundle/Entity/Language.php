<?php

namespace Odiseo\Bundle\ConAgraBundle\Entity;

class Language {

	private $id;

	private $locale;

	private $name;


	public function getId() {
		return $this->id;
	}

	public function setId($id) {
		$this->id = $id;
	}

	public function getLocale() {
		return $this->locale;
	}

	public function setLocale($locale) {
		$this->locale = $locale;
	}
	public function getName() {
		return $this->name;
	}

	public function setName($name) {
		$this->name = $name;
	}
}