<?php

namespace Odiseo\Bundle\ConAgraBundle\DataFixtures\ORM;

use Doctrine\Common\Persistence\ObjectManager;
use Odiseo\Bundle\ConAgraBundle\Entity\Country;
use Odiseo\Bundle\ConAgraBundle\Entity\Distributor;

class LoadCountriesAndDistrubutorsData extends DataFixture
{
    public function load(ObjectManager $manager)
    {
    	$countries = array(
    			'CO' => array(
    				'name' => 'Colombia',
    				'distributors' => array('Fedco SA', 'Congrupo', 'Star Brands International', 'Bebida Logistica', 'De la Sabana', 'Distribuidora Elite') 
    			), 
				'VE' => array(
    				'name' => 'Venezuela',
    				'distributors' => array('Alfonzo Rivas', 'Importaciones MR')
    			),
				'EC' => array(
    				'name' => 'Ecuador',
    				'distributors' => array('Quifatex', 'El Rosado', 'WRT')
    			),
				'PE' => array(
    				'name' => 'Peru',
    				'distributors' => array('Trijet', 'KMC Internacional', 'Peruana de Abastecimientos','Peruana de Abastecimientos')
    			),
				'BO' => array(
    				'name' => 'Bolivia',
    				'distributors' => array('Aidisa')
    			),
				'CR' => array(
    				'name' => 'Costa Rica',
    				'distributors' => array('Agencias Feduro', 'Ciamesa','Corporacion de Supermercados')
    			),
				'HN' => array(
    				'name' => 'Honduras',
    				'distributors' => array('Distribuidora Solis (DISOL)', ' Supermercados Junior', 'Hortifruti Honduras', 'Operadora del Oriente')
    			),
				'NI' => array(
    				'name' => 'Nicaragua',
    				'distributors' => array('Contesa', 'Hortifruti Nicaragua S A' )
    			),
				'PA' => array(
    				'name' => 'Panama',
    				'distributors' => array('Agencias Feduro', 'Felipe Mota')
    			),
				'BZ' => array(
    				'name' => 'Belize',
    				'distributors' => array('L&E International', 'James Brodies', 'Reimers Feed Mill')
    			),
				'SV' => array(
    				'name' => 'El Salvador',
    				'distributors' => array('Distribuidora Europea','Operadora del Sur', 'Dizac SA de CV')
    			),
				'GT' => array(
    				'name' => 'Guatemala',
    				'distributors' => array('Operadora de Tiendas', 'Desarrolladora Internacional DCI S', 'Ninoshka S.A')
    			),
				'US' => array(
    				'name' => 'Estados Unidos',
    				'distributors' => array('Promo International' , 'Highland Marketing Inc.',  'Meel Corp')
    			),
				'AR' => array(
    				'name' => 'Argentina',
    				'distributors' => array('Promtex')
    			),
				'CL' => array(
    				'name' => 'Chile',
    				'distributors' => array('Hermanos Velarde', 'Anson Trading', 'Hipermercados Tottus', 'Walmart Chile')
    			),
				'BR' => array(
    				'name' => 'Brazil',
    				'distributors' => array('Spectrus', 'Companhia Brasileira', 'Carrefour Brazil', 'Cargill', 'Verdemar', 'Walmart Brazil') 
    			),
				'SR' => array(
    				'name' => 'Suriname',
    				'distributors' => array('Guimar N V', 'Tumac', 'Carrefour Brazil', 'Cargill', 'Verdemar', 'Walmart Brazil') 
    			),
				'GY' => array(
    				'name' => 'Guyana',
    				'distributors' => array('Toucan Industries')
    			),
				'UY' => array(
    				'name' => 'Uruguay',
    				'distributors' => array('Isonel')
    			),
				'PY' => array(
    				'name' => 'Paraguay',
    				'distributors' => array('Galerias Guarani')
    			)
    	); 
    	
    	$countryIndex = 0;
    	foreach ($countries as $isoCode => $c)
    	{
    		$country = new Country();	
    		$country->setName($c['name']);
    		$country->setIsoCode($isoCode);
    		
    		$this->setReference('conagra_country_'.$countryIndex, $country);
    		
    		$distributorIndex = 0;
    		foreach ($c['distributors'] as $d)
    		{
    			$distributor = new Distributor();
    			$distributor->setCountry($country);
    			$distributor->setName($d);

    			$this->setReference('conagra_country_'.$countryIndex.'_distributor_'.$distributorIndex, $distributor);
    			
    			$distributorIndex++;
    			$manager->persist($distributor);
    		}
    		
    		$countryIndex++;
	    	$manager->persist($country);
    	}
    	
    	$manager->flush();
    }
    
    public function getOrder()
    {
    	return 1;
    }
}
